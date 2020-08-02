import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonProps {
  onPress: () => void;
  text: string;
  disabled?: boolean;
}

export default function Button({
  text,
  onPress,
  disabled = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: disabled ? 0.8 : 1 }]}
      {...{ onPress }}
    >
      <LinearGradient
        colors={["#FD749B", "#281AC8"]}
        style={styles.linearContainer}
      >
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  linearContainer: {
    borderRadius: 5,
    width: 194,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
