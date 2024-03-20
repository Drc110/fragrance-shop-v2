import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store.tsx'
import IcartItem from '../interfaces/icartItem.js'

interface IcartSlice{
    items: IcartItem[],
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
            const el = state.items.find(el => el.id == action.payload.id && el.price == action.payload.price)
            if(el){
                el.amount += action.payload.amount
                el.amount > 99 ? el.amount = 99 : null
                state.totalprice = state.items.reduce((sum, obj) => (obj.price * obj.amount) + sum, 0)
            }else{
                state.items.push(action.payload)
                state.totalprice += action.payload.amount * action.payload.price
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(el => el.id == action.payload.id && el.price == action.payload.price)
            state.totalprice = state.items.reduce((sum, obj) => (obj.price * obj.amount) + sum, 0)
        },
    },
})

export const { addtoCart, removeFromCart } = cartSlice.actions
export const selectCart = (state: RootState) => ({"items": state.cart.items, "price": state.cart.totalprice})

export default cartSlice.reducer