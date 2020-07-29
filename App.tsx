import React from "react";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { SplashScreen as CoinbaseSplashScreen } from "./src/components";
import { Onboarding } from "./src/Onboarding";

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

    return <Onboarding />;
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
};

async function downloadAssets() {
  await Font.loadAsync(customFonts);
}
