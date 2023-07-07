import {configureStore} from '@reduxjs/toolkit';
import toggleCartSlice from './slices/toggleCartSlice'
import cartSlice from './slices/cartSlice'
import userSliceReducer from './slices/userSlice';
const store = configureStore({
    reducer: {
        toggleCart: toggleCartSlice.reducer,
        cart: cartSlice.reducer,
        user: userSliceReducer,
    }
})

export default store;