import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Iitem from '../interfaces/Iitems.ts'

const URL = "https://cdf7fb39c6b61866.mokky.dev"

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: URL 
    }),
    tagTypes: ['Items'],
    endpoints: (builder) => ({
        firstFetch: builder.query({
            query: ({page, gender, sort, searchPromt}) => {
                let target = `/items?page=${page}`
                gender ? target += `&gender=${gender}` : null
                sort ? target += `&sortBy=${sort}` : null
                searchPromt.length ? target += `&title=*${searchPromt}*` : null
                console.log("TARGET URL:", target)
                return target
            },
            transformResponse: (response: { meta: any, items: Iitem[] }) => response.items,
            serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
                let target = endpointName;
                queryArgs.gender ? target += `/g=${queryArgs.gender}` : null;
                queryArgs.sort ? target += `/s=${queryArgs.sort}` : null; //have radomly
                queryArgs.searchPromt ? target += `/p=${queryArgs.searchPromt}` : null;
                return target //firstFetch - дает имя запросам на API, если другое то обновляет кэш, старые умрут через 60 секунд
            },
            keepUnusedDataFor: 0, //!!! win = win
            forceRefetch({ currentArg, previousArg, state, endpointState }) {
                //console.log(endpointState)
                return currentArg !== previousArg //currPage !== (prev. page) возвращает true/false, если true то даже(!) если кэш жив делает запрос если false терпит
            },
            merge: (currentCache, newItems, other) => {
                currentCache.push(...newItems)
                console.log("from merge: ", other)
            }
        }),
        fetchOneItem: builder.query({
            query: ({id}) => {
                return `/items?id=${id}`
            },
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            keepUnusedDataFor: 0,
            transformResponse: (response: Iitem[]) => response[0],
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFirstFetchQuery, useFetchOneItemQuery } = api