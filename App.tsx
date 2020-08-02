import React from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import AsyncStorage from "@react-native-community/async-storage";
import { Provider } from "react-redux";

import { SplashScreen as CoinbaseSplashScreen } from "./src/components";
import Navigation from "./src/navigation/Navigation";

import { createReduxStore, RootState } from "./src/redux/Reducers";

export default class App extends React.Component {
  state: { appIsReady: boolean; initialState: RootState } = {
    appIsReady: false,
    initialState: {
      user: { authenticated: false, onboardingCompleted: false },
    },
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
    const data = await loadAppData();
    console.log("data", data);

    this.setState(
      {
        appIsReady: true,
        initialState: {
          user: { ...this.state.initialState.user, onboardingCompleted: data },
        },
      },
      async () => {
        await SplashScreen.hideAsync();
      }
    );
  };

  render() {
    if (!this.state.appIsReady) {
      return <CoinbaseSplashScreen />;
    }

    return (
      <Provider store={createReduxStore(this.state.initialState)}>
        <Navigation />
      </Provider>
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

async function loadAppData() {
  return await AsyncStorage.getItem("onboardingCompleted");
}
