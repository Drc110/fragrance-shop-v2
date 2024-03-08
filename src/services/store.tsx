import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './slices/itemsSlice.ts'
import cartReducer from './slices/cartSlice.ts'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch