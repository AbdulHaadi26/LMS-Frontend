import { publicAPI } from "../../utils/api";
import { ErrorMessages } from "../../utils/error";
import { AuthActions } from "../reducers/auth.reducer";
import { LoginActions } from "../reducers/login.reducer";
import { Dispatch } from "@reduxjs/toolkit";
import { setLocalStorageValue } from "./localstorage.service";

export type SignInType = {
  email: string;
  password: string;
};

export const signIn =
  (requestObject: SignInType) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: LoginActions.SET_LOADING,
      });

      const { data } = await publicAPI.post("/auth/login", requestObject);

      if (data.token) {
        setLocalStorageValue("token", data.token);

        dispatch({
          type: LoginActions.SET_SUCCESS,
        });

        dispatch({
          type: AuthActions.SET_AUTH,
          payload: true,
        });
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
