import { publicAPI } from "../../utils/api";
import { ErrorMessages } from "../../utils/error";
import { RegisterActions } from "../reducers/register.reducer";
import { Dispatch } from "@reduxjs/toolkit";

export type RegisterTenantType = {
  name: string;
  email: string;
  password: string;
};

export const createTenant =
  (requestObject: RegisterTenantType) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: RegisterActions.SET_LOADING,
      });

      const { data } = await publicAPI.post("/tenant/register", requestObject);

      if (data) {
        dispatch({
          type: RegisterActions.SET_SUCCESS,
        });
      } else {
        throw new Error(data?.error);
      }
    } catch {
      console.log("error");
      dispatch({
        type: RegisterActions.SET_ERROR,
        payload: ErrorMessages.CREATE_TENANT,
      });
    }
  };
