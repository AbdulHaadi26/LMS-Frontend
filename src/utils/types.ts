import { AnyAction } from "redux-saga";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../redux/reducers";

export type DispatchType = ThunkDispatch<RootState, unknown, AnyAction>;

//PROFILE TYPES
export type ProfileTyoe = {
  _id: string;
  name: string;
  email: string;
  tenantId: string;
  type: string;
};

export type SelectOptionType = {
  label: string;
  value: string;
};
