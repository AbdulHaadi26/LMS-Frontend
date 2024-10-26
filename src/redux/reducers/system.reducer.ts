import { TabNames } from "../../utils/enum";

export type SystemState = {
  tab: TabNames;
};

export enum SystemActions {
  SET_TAB = "SYSTEM[SET_TAB]",
}

const initialState: SystemState = {
  tab: TabNames.INVOICES,
};

export const systemReducer = (
  state = initialState,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case SystemActions.SET_TAB:
      return { ...state, tab: action.payload };
    default:
      return state;
  }
};
