import {
  UserActions,
  ONBOARDING_COMPLETED,
  USER_AUTHENTICATED,
} from "./../Actions/types";

interface UserState {
  authenticated: boolean;
  onboardingCompleted: boolean;
}

const DEFAULT_USER_STATE: UserState = {
  authenticated: false,
  onboardingCompleted: false,
};

export default function UserReducer(
  state: UserState = DEFAULT_USER_STATE,
  action: UserActions
): UserState {
  switch (action.type) {
    case ONBOARDING_COMPLETED: {
    }
    case USER_AUTHENTICATED: {
    }
    default: {
      return state;
    }
  }
}
