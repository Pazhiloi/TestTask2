import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginData {
  username: string;
  password: string;
}
const rightData: LoginData = {
  username: "admin",
  password: "12345",
};
const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // It is a good example how to write async code without extra reducers
  reducers: {
    logInStart: (state) => {
      state.isLoading = true;
    },
    logInSuccess: (state) => {
       state.isLoggedIn = true;
       state.isLoading = false;
       state.error = null;
    },
    logInFail: (state) => {
      state.isLoading = false;
      state.error = "Incorrect username or password";
    },
    logOutSuccess: (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    }
  }
});

// here is the actions that we use with dispatch
export const { logInStart, logInSuccess, logInFail, logOutSuccess} = userSlice.actions;

export const selectUser = (state: RootState) => state.user.isLoggedIn;
export const selectLoading = (state: RootState) => state.user.isLoading;
export const selectError = (state: RootState) => state.user.error;
  // Here I wrote such a thunk because I have synchronous data (rightData object)
export const logIn =
  ({ username, password }: LoginData): AppThunk =>
  (dispatch) => {
    // Right here I am checking that username and password i passed is matching the right data (rightData object)
    if (username === rightData.username && password === rightData.password) {
      dispatch(logInStart());
      dispatch(logInSuccess());
    } else {
      dispatch(logInFail());
    }
  };
export const logOut = () : AppThunk => 
(dispatch) => {
  dispatch(logOutSuccess())
}
export default userSlice.reducer;
