import React from "react";
import { View } from "react-native";
import { Button } from "../components";
import AsyncStorage from "@react-native-community/async-storage";

export default function Login() {
  return (
    <View>
      <Button
        onPress={async () =>
          await AsyncStorage.removeItem("onboardingCompleted")
        }
        text={"click here"}
      />
    </View>
  );
}
