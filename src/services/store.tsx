import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice.ts'
import { api } from './api/api.ts'
import optionsReducer from './slices/optionsSlice.ts'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    options: optionsReducer,
    [api.reducerPath]: api.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch