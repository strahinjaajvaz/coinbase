export const ONBOARDING_COMPLETED = "ONBOARDING_COMPLETED";
export const USER_AUTHENTICATED = "USER_AUTHENTICATED";

interface OnboardingCompletedAction {
  type: typeof ONBOARDING_COMPLETED;
  payload: boolean;
}

interface UserAuthenticatedAction {
  type: typeof USER_AUTHENTICATED;
  payload: boolean;
}

export type UserActions = OnboardingCompletedAction | UserAuthenticatedAction;
