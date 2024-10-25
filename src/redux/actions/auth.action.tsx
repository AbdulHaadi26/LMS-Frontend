import { publicAPI } from "../../utils/api";
import { LocalStorageItemNames } from "../../utils/enum";
import { ErrorMessages } from "../../utils/error";
import { DispatchType } from "../../utils/types";
import { AuthActions } from "../reducers/auth.reducer";
import { LoginActions } from "../reducers/login.reducer";
import { ProfileActions } from "../reducers/profile.reducer";
import {
  removeLocalStorageValue,
  setLocalStorageValue,
} from "./localStorage.service";
import { getProfile } from "./user.action";

export type SignInType = {
  email: string;
  password: string;
};

enum Endpoints {
  LOGIN = "/auth/login",
}

export const signIn =
  (requestObject: SignInType) => async (dispatch: DispatchType) => {
    try {
      dispatch({
        type: LoginActions.SET_LOADING,
      });

      const { data } = await publicAPI.post(Endpoints.LOGIN, requestObject);

      if (data.token) {
        setLocalStorageValue(LocalStorageItemNames.TOKEN, data.token);

        dispatch({
          type: LoginActions.SET_SUCCESS,
        });

        dispatch(getProfile());
      } else {
        throw new Error(data.error);
      }
    } catch {
      dispatch({
        type: LoginActions.SET_ERROR,
        payload: ErrorMessages.LOGIN_FAILED,
      });
    }
  };

export const signOut = () => async (dispatch: DispatchType) => {
  removeLocalStorageValue(LocalStorageItemNames.TOKEN);
  dispatch({
    type: AuthActions.SET_AUTH,
    payload: false,
  });
  dispatch({
    type: ProfileActions.SET_PROFILE,
    payload: null,
  });
};
