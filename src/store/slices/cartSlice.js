import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0,
    totalItems: 0
};

const cartSlice = createSlice({
    name: 'cart', 
    initialState: initialState, 
    reducers: {
        addItem(state) {

        },
        removeItem(state) {

        },
    }
})