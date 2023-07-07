import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    uid: null,
    userEmail: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
        state.userName = action.payload.userName,
        state.uid = action.payload.uid
    },
    setUserLogoutState: state => {
        state.userName = null;
        state.uid = null;
    }
  }
});

export const {setActiveUser, setUserLogoutState} = userSlice.actions;


export default userSlice.reducer