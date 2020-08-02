import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { Onboarding } from "../Onboarding";
import { AuthenticationStack } from "../Authentication";

import { RootState } from "../redux/Reducers";

export default function Navigation() {
  const onboardingCompleted = useSelector((state: RootState) => {
    console.log(state);
    return state.user.onboardingCompleted;
  });

  console.log(onboardingCompleted);
  return (
    <NavigationContainer>
      {!onboardingCompleted && <Onboarding />}
      {onboardingCompleted && <AuthenticationStack />}
    </NavigationContainer>
  );
}
