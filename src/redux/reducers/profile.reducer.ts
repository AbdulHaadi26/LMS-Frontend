import { ProfileType } from "../../utils/types";

export type ProfileState = {
  isLoading: boolean;
  profile: ProfileType | null;
};

export enum ProfileActions {
  FETCH_PROFILE = "PROFILE[FETCH_PROFILE]",
  SET_PROFILE = "PROFILE[SET_PROFILE]",
}

const initialState: ProfileState = {
  isLoading: true,
  profile: null,
};

export const profileReducer = (
  state = initialState,
  action: { type: string; payload: ProfileState }
) => {
  switch (action.type) {
    case ProfileActions.FETCH_PROFILE:
      return {
        ...state,
        isLoading: true,
        profile: null,
      };
    case ProfileActions.SET_PROFILE:
      return {
        ...state,
        isLoading: false,
        profile: action.payload.profile,
      };

    default:
      return state;
  }
};
