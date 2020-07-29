import React from "react";
import { TouchableOpacity, Text, Dimensions } from "react-native";
import tailwind from "tailwind-rn";
import Animated, { interpolate, multiply, sub } from "react-native-reanimated";

const { width } = Dimensions.get("window");

interface SkipProps {
  onPress: () => void;
  x: Animated.Node<number>;
  steps: number;
}

export default function Skip({ onPress, x, steps }: SkipProps) {
  const startHidingAt = sub(multiply(width, sub(steps, 1)), 200);
  const hiddenAt = multiply(width, sub(steps, 1));

  const opacity = interpolate(x, {
    inputRange: [0, startHidingAt, hiddenAt],
    outputRange: [1, 1, 0],
  });
  return (
    <TouchableOpacity
      style={[tailwind("absolute right-0 top-0 mt-32 mr-10 z-10")]}
      {...{ onPress }}
    >
      <Animated.View style={{ opacity }}>
        <Text
          style={[{ fontFamily: "Poppins-Bold" }, tailwind("text-gray-600")]}
        >{`Skip >>`}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}
