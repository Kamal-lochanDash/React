import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const appStore=configureStore({


    //here slices will be created


    reducer:{
        cart:cartReducer,

    }

}

    


);

export default appStore;