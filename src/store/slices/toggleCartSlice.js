import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartOpen: false
};
const toggleCartSlice = createSlice({
    name: 'toggleCart', 
    initialState,
    reducers: {
        openCart(state) {
            state.cartOpen = true;
        },
        closeCart(state) {
            state.cartOpen = false;
        }
    }
});

export const toggleCartActions = toggleCartSlice.actions;

export default toggleCartSlice;