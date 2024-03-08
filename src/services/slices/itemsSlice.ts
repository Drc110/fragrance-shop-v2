import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store.tsx'
import Iitem from "../Iitems.ts"

interface IitemsArray{
  items: Iitem[]  
}

const initialState : IitemsArray = {
  items: []
}

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action) { //action: PayloadAction<number>
      state.items = action.payload
    },
  },
})

export const { setItems } = itemSlice.actions
export const selectItems = (state: RootState) => state.items.items

export default itemSlice.reducer