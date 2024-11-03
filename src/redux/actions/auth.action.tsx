import { publicAPI } from "../../utils/api";
import { LocalStorageItemNames } from "../../utils/enum";
import { ErrorMessages } from "../../utils/error";
import { ApiResponseType, DispatchType } from "../../utils/types";
import { AuthActions } from "../reducers/auth.reducer";
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
  (requestObject: SignInType) =>
  async (dispatch: DispatchType): Promise<ApiResponseType<string>> => {
    try {
      const { data } = await publicAPI.post(Endpoints.LOGIN, requestObject);

      if (data.token) {
        setLocalStorageValue(LocalStorageItemNames.TOKEN, data.token);
        dispatch(getProfile());

        return {
          success: true,
          data: data.token,
        };
      } else {
        throw new Error(data.error);
      }
    } catch {
      return {
        success: false,
        error: ErrorMessages.LOGIN_FAILED,
      };
    }
  };

export const signOut =
  () =>
  async (dispatch: DispatchType): Promise<void> => {
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
