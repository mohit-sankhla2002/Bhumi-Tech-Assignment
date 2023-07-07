import {configureStore} from '@reduxjs/toolkit';
import toggleCartSlice from './slices/toggleCartSlice'
import cartSlice from './slices/cartSlice'
const store = configureStore({
    reducer: {
        toggleCart: toggleCartSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store;