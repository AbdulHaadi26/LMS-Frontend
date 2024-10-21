export type RegisterState = {
  isLoading: boolean;
  error: string | null;
  success: boolean;
};

export enum RegisterActions {
  SET_LOADING = "REGISTER[SET_LOADING]",
  SET_ERROR = "REGISTER[SET_ERROR]",
  SET_SUCCESS = "REGISTER[SET_SUCCESS]",
}

export const initialState: RegisterState = {
  isLoading: false,
  error: null,
  success: false,
};

export const registerReducer = (
  state = initialState,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case RegisterActions.SET_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        success: false,
      };
    case RegisterActions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        success: false,
      };
    case RegisterActions.SET_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};
