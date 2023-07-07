import {configureStore} from '@reduxjs/toolkit';
import toggleCartSlice from './slices/toggleCartSlice'
const store = configureStore({
    reducer: {
        toggleCart: toggleCartSlice.reducer,
    }
})

export default store;