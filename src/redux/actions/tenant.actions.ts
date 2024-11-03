import { publicAPI } from "../../utils/api";
import { ErrorMessages } from "../../utils/error";
import { ApiResponseType } from "../../utils/types";

export type RegisterTenantType = {
  name: string;
  email: string;
  password: string;
};

enum EndPoints {
  REGISTER = "/tenant/register",
}

export const createTenant = async (
  requestObject: RegisterTenantType
): Promise<ApiResponseType<string>> => {
  try {
    const { data } = await publicAPI.post(EndPoints.REGISTER, requestObject);

    if (data) {
      return {
        success: true,
        data: data,
      };
    } else {
      throw new Error(data?.error);
    }
  } catch {
    return {
      success: false,
      error: ErrorMessages.CREATE_TENANT,
    };
  }
};
