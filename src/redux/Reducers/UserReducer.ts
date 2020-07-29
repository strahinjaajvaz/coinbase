import {
  UserActions,
  ONBOARDING_COMPLETED,
  USER_AUTHENTICATED,
} from "./../Actions/types";

interface UserState {
  authenticated: boolean;
  completedOnboarding: boolean;
}

export default function UserReducer(
  state: UserState,
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
