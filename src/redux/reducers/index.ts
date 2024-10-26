import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { authReducer, AuthState } from "./auth.reducer";
import { loginReducer, LoginState } from "./login.reducer";
import { profileReducer, ProfileState } from "./profile.reducer";
import { registerReducer, RegisterState } from "./register.reducer";
import { systemReducer, SystemState } from "./system.reducer";

export interface RootState {
  Auth: AuthState;
  Register: RegisterState;
  Login: LoginState;
  Profile: ProfileState;
  System: SystemState;
}

const rootReducer = combineReducers({
  Auth: authReducer,
  Register: registerReducer,
  Login: loginReducer,
  Profile: profileReducer,
  System: systemReducer,
});

const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default reduxStore;
