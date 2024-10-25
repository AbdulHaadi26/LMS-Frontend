import { publicAPI } from "../../utils/api";
import { ErrorMessages } from "../../utils/error";
import { DispatchType } from "../../utils/types";
import { RegisterActions } from "../reducers/register.reducer";

export type RegisterTenantType = {
  name: string;
  email: string;
  password: string;
};

enum EndPoints {
  REGISTER = "/tenant/register",
}

export const createTenant =
  (requestObject: RegisterTenantType) => async (dispatch: DispatchType) => {
    try {
      dispatch({
        type: RegisterActions.SET_LOADING,
      });

      const { data } = await publicAPI.post(EndPoints.REGISTER, requestObject);

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
