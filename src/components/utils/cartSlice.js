import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    
    name : 'cart',
    initialState : {
        items : [],
    },
    reducers : {
        addItem : (state, action) => {
            state.items.push(action.payload);          
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => {
              return item?.info?.id !== action.payload;
            });
          },
        clearCart : (state) => {
            state.items = [];
        }
    },
})
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export  default cartSlice.reducer;