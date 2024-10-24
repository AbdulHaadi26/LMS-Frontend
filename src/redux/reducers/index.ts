import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { authReducer, AuthState } from "./auth.reducer";
import { registerReducer, RegisterState } from "./register.reducer";
import { configureStore } from "@reduxjs/toolkit";
import { loginReducer, LoginState } from "./login.reducer";

export interface RootState {
  Auth: AuthState;
  Register: RegisterState;
  Login: LoginState;
}

const rootReducer = combineReducers({
  Auth: authReducer,
  Register: registerReducer,
  Login: loginReducer,
});

const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default reduxStore;
