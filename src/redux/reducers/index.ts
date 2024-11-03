import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { authReducer, AuthState } from "./auth.reducer";
import { invoiceReducer, InvoiceState } from "./invoice.redux";
import { profileReducer, ProfileState } from "./profile.reducer";
import { systemReducer, SystemState } from "./system.reducer";

export interface RootState {
  Auth: AuthState;
  Profile: ProfileState;
  System: SystemState;
  Invoice: InvoiceState;
}

const rootReducer = combineReducers({
  Auth: authReducer,
  Profile: profileReducer,
  System: systemReducer,
  Invoice: invoiceReducer,
});

const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default reduxStore;
