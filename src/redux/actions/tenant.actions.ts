import { publicAPI } from "../../utils/api";
import { RegisterActions } from "../reducers/register.reducer";
import { Dispatch } from "@reduxjs/toolkit";

export type RegisterTenantType = {
  name: string;
  email: string;
  password: string;
};

export const createTenant =
  (data: RegisterTenantType) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: RegisterActions.SET_LOADING,
      });

      const res = await publicAPI.post("/tenant/register", data);

      if (res?.data) {
        dispatch({
          type: RegisterActions.SET_SUCCESS,
        });
      }

      throw new Error(res?.data?.error);
    } catch {
      console.log("error");
      dispatch({
        type: RegisterActions.SET_ERROR,
        payload: "Registeration failed",
      });
    }
  };
