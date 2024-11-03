import { AnyAction } from "redux-saga";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../redux/reducers";

export type DispatchType = ThunkDispatch<RootState, unknown, AnyAction>;

//PROFILE TYPES
export type ProfileType = {
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

export type UserContactType = {
  name: string;
  email: string;
  contactNo: string;
};

export type ApiResponseType<T> = {
  data?: T;
  error?: string;
  success: boolean;
};

export type InvoiceType = {
  _id: string;
  name: string;
  invoiceNo: string;
  department: string;
  description: string;
  amount: number;
  currency: string;
  dated: string;
  type: string;
  status: string;
  sentBy: UserContactType;
  receivedBy: UserContactType;
  attachments: number[];
};
