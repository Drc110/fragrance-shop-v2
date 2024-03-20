import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store.tsx'

interface IoptionsState{
    gender: number,
    search: string,
    sortOption: string
}

const initialState : IoptionsState = {
    gender: 0,
    search: "",
    sortOption: "" 
}

export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        changeStateGender(state, action: PayloadAction<{gender: number}>){
            action.payload.gender ? state.gender = action.payload.gender : state.gender = 0
        },
        changeStateSearch(state, action: PayloadAction<{searchPromt: string}>){
            action.payload.searchPromt ? state.search = action.payload.searchPromt : state.search = ''
        },
        changeStateSort(state, action: PayloadAction<{sortOption: string}>){
            action.payload.sortOption ? state.sortOption = action.payload.sortOption : state.sortOption = ''
        },
    },
})

export const { changeStateGender, changeStateSearch, changeStateSort } = optionsSlice.actions
export const selectOptions = (state: RootState) => ({"gender": state.options.gender, "search": state.options.search, "sortOption": state.options.sortOption})

export default optionsSlice.reducer