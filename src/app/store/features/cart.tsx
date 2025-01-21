import { Carts } from '@/app/utils/mock'
import { Cart } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState: Cart[] = Carts


export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
    },
   
    
})

export const {  } = cartSlice.actions


export default cartSlice.reducer