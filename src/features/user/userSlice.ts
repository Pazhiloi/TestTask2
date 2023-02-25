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

export const { logInStart, logInSuccess, logInFail, logOutSuccess} = userSlice.actions;

export const selectUser = (state: RootState) => state.user.isLoggedIn;
export const selectLoading = (state: RootState) => state.user.isLoading;
export const selectError = (state: RootState) => state.user.error;

export const logIn =
  ({ username, password }: LoginData): AppThunk =>
  (dispatch) => {
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
