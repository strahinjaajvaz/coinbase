import React from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import { SplashScreen as CoinbaseSplashScreen } from "./src/components";
// import { Onboarding } from "./src/Onboarding";
import { AuthenticationStack } from "./src/Authentication";

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }

  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {
    await performAPICalls();
    await downloadAssets();

    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  };

  render() {
    if (!this.state.appIsReady) {
      return <CoinbaseSplashScreen />;
    }

    return (
      <NavigationContainer>
        <AuthenticationStack />
      </NavigationContainer>
    );
  }
}

// Put any code you need to prepare your app in these functions
async function performAPICalls() {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, 1000);
  });
}

let customFonts = {
  "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
};

async function downloadAssets() {
  await Font.loadAsync(customFonts);
}
