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
}

export default function Button({ text, onPress }: ButtonProps) {
  return (
    <TouchableOpacity {...{ onPress }}>
      <LinearGradient colors={["#FD749B", "#281AC8"]} style={styles.cointainer}>
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
