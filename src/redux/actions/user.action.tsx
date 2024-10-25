import { privateAPI } from "../../utils/api";
import { LocalStorageItemNames } from "../../utils/enum";
import { DispatchType } from "../../utils/types";
import { AuthActions } from "../reducers/auth.reducer";
import { LoginActions } from "../reducers/login.reducer";
import { ProfileActions } from "../reducers/profile.reducer";
import { removeLocalStorageValue } from "./localStorage.service";

enum EndPoints {
  GET_PROFILE = "/user/profile",
}

export const getProfile = () => async (dispatch: DispatchType) => {
  try {
    dispatch({
      type: AuthActions.SET_AUTH,
      payload: true,
    });

    dispatch({
      type: LoginActions.SET_LOADING,
    });

    const { data } = await privateAPI.get(EndPoints.GET_PROFILE);

    if (data.profile) {
      dispatch({
        type: ProfileActions.SET_PROFILE,
        payload: data.profile,
      });
    } else {
      throw new Error(data.error);
    }
  } catch {
    removeLocalStorageValue(LocalStorageItemNames.TOKEN);
    dispatch({
      type: AuthActions.SET_AUTH,
      payload: false,
    });
  }
};
