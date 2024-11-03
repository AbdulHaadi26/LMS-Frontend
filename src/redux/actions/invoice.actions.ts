import { privateAPI } from "../../utils/api";
import { ErrorMessages } from "../../utils/error";
import {
  ApiResponseType,
  DispatchType,
  UserContactType,
} from "../../utils/types";
import { InvoiceActions } from "../reducers/invoice.redux";

export type CreateInvoiceType = {
  name: string;
  invoiceNo: string;
  department: string;
  description: string;
  amount: number;
  currency: string;
  dated: string;
  type: string;
  status: string;
  sentBy: UserContactType;
  receivedBy: UserContactType;
  attachments: number[];
};

enum EndPoints {
  REGISTER = "/invoice",
}

export const createInvoice =
  (requestObject: CreateInvoiceType) =>
  async (
    dispatch: DispatchType
  ): Promise<ApiResponseType<CreateInvoiceType>> => {
    try {
      const { data } = await privateAPI.post(EndPoints.REGISTER, requestObject);

      if (data) {
        dispatch({
          type: InvoiceActions.SET_LIST,
          payload: {
            list: [data],
          },
        });

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
        error: ErrorMessages.CREATE_INVOICE,
      };
    }
  };
