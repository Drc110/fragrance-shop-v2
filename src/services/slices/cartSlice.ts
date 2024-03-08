import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store.tsx'
import Iitem from "../Iitems.ts"

interface IcartSlice{
    items: Iitem[],
    totalprice: number 
}

const initialState : IcartSlice = {
    items: [],
    totalprice : 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart(state, action) { //action: PayloadAction<number>
            state.items.push(action.payload)
        },
        removeFromCart(state, action) {
            state.items = state.items.filter((obj) => obj.title != action.payload)
        },
    },
})

export const { addtoCart, removeFromCart } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart.items

export default cartSlice.reducer