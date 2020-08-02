import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import tailwind from "tailwind-rn";

interface ButtonProps {
  onPress: () => void;
  text: string;
  disabled?: boolean;
}

export default function Button({ text, onPress, disabled }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[{ opacity: disabled ? 0.8 : 1 }, tailwind("mt-4")]}
      {...{ onPress }}
    >
      <LinearGradient
        colors={["#FD749B", "#281AC8"]}
        style={[
          { borderRadius: 5 },
          tailwind("rounded-lg flex w-40 h-10 items-center justify-center"),
        ]}
      >
        <Text style={[tailwind("text-white font-bold	")]}>
          {text.toUpperCase()}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
