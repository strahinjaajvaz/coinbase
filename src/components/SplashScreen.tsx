import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Logo from "../../assets/Logo.svg";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 160,
    height: 32,
  },
});

export default function SplashScreen() {
  return (
    <LinearGradient
      colors={["#FD749B", "#281AC8"]}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <View style={styles.container}>
        <Logo width={160} height={32} />
      </View>
    </LinearGradient>
  );
}
