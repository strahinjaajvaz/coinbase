import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  cointainer: {
    height: 43,
    width: 192,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

interface ButtonProps {
  onPress: () => void;
  text: string;
  disabled: boolean;
}

export default function Button({ text, onPress, disabled }: ButtonProps) {
  return (
    <TouchableOpacity {...{ onPress }}>
      <LinearGradient
        colors={["#FD749B", "#281AC8"]}
        style={(styles.cointainer, { opacity: disabled ? 0.8 : 1 })}
      >
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
