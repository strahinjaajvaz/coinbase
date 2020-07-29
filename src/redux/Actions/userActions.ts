import { ONBOARDING_COMPLETED, USER_AUTHENTICATED, UserActions } from "./types";

export function onboardingCompleted(): UserActions {
  return {
    type: ONBOARDING_COMPLETED,
    payload: true,
  };
}

export function userAuthenticated(): UserActions {
  return {
    type: USER_AUTHENTICATED,
    payload: true,
  };
}
