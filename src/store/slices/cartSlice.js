import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0
};

const cartSlice = createSlice({
    name: 'cartSlice', 
    initialState, 
    reducers: {
        addItem(state, {payload}) {
            console.log(payload);
            const {title, price, id} = payload;
            const idx = state.items.findIndex((itm) => (itm.id === +id));

            console.log(idx);

            if (idx === -1) {
                const newItem = {
                    id: id, 
                    title: title, 
                    price: price, 
                    quantity: 1
                }

                state.items.push(newItem);
            }

            else {
                state.items[idx].quantity = state.items[idx].quantity + 1;
            }

            state.totalAmount = state.totalAmount + price;
        },
        removeItem(state, {payload}) {
            const {id} = payload;
            const idx = state.items.findIndex(itm => itm.id === +id);
            if (state.items[idx].quantity === 1) {
              const filteredItems = state.items.filter((itm) => itm.id !== id);
              state.items = filteredItems;
            } else {
              state.items[idx].quantity--;
            }
            state.totalAmount = state.totalAmount - state.items[idx].price;
        }
    }
});
export const cartActions = cartSlice.actions;
export default cartSlice;