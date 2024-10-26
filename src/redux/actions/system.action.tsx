import { TabNames } from "../../utils/enum";
import { DispatchType } from "../../utils/types";
import { SystemActions } from "../reducers/system.reducer";

export const setSidebarTab =
  (tab: TabNames) => async (dispatch: DispatchType) => {
    dispatch({
      type: SystemActions.SET_TAB,
      payload: tab,
    });
  };
