import { createSlice } from "@reduxjs/toolkit"
import { clearLocalStorage, persistLocalStorage } from "../../../utilities/local.storage";

export const userEmpty = {
  user: ''
};

export const UserKey = 'user';

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : userEmpty,
  reducers: {
    loginUser: (state, action) => {
      persistLocalStorage(UserKey, action.payload);
      return action.payload;
    },
    resetUser: () => {
      clearLocalStorage(UserKey);
      return userEmpty;
    },
  }
});

export const { loginUser, resetUser } = userSlice.actions;

export default userSlice.reducer;