import { InvoiceType } from "../../utils/types";

export type InvoiceState = {
  isLoading: boolean;
  list: InvoiceType[];
  count: number;
};

export enum InvoiceActions {
  SET_LOADING = "INVOICE[SET_LOADING]",
  SET_LIST = "INVOICE[SET_LIST]",
  SET_COUNT = "INVOICE[SET_COUNT]",
  RESET_LIST = "INVOICE[RESET_LIST]",
}

export const initialState: InvoiceState = {
  isLoading: false,
  list: [],
  count: 0,
};

export const invoiceReducer = (
  state = initialState,
  action: { type: string; payload: InvoiceState }
) => {
  switch (action.type) {
    case InvoiceActions.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case InvoiceActions.SET_LIST:
      return {
        ...state,
        list: state.list.concat(action.payload.list),
        isLoading: false,
      };

    case InvoiceActions.SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };

    case InvoiceActions.RESET_LIST:
      return {
        ...state,
        list: [],
        count: 0,
      };
    default:
      return state;
  }
};
