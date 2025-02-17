import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";

const store = configureStore({
    reducer:{
        cards:cardsSlice
    }
})

export default store