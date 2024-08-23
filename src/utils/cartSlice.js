import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:( state,action)=>{
            //this is the reducer function where  as the addItem is the action
            // it gets access to two parameters 1.state 2.action , state refers to the initialState of the store
            //here we are mutating the state
            state.items.push(action.payload)

        },

        removeItem:(state,action)=>{
            state.items.pop();
        },

        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions
export default cartSlice.reducer;