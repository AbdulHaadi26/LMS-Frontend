import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../redux/reducers";
import { AnyAction } from "redux-saga";

export enum ButtonActions {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

export type DispatchType = ThunkDispatch<RootState, unknown, AnyAction>;
