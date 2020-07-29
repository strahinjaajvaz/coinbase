import React from "react";
import { Svg, Circle, LinearGradient, Stop } from "react-native-svg";
import Animated, {
  interpolate,
  Extrapolate,
  divide,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface DotProps {
  x: Animated.Node<number>;
  index: number;
}

export default function Dot({ index, x }: DotProps) {
  const current = divide(x, width);
  const opacity = interpolate(current, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(current, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={{
        height: 10,
        width: 10,
        marginHorizontal: 6,
        opacity,
        transform: [{ scale }],
      }}
    >
      <Svg height="100%" width="100%">
        <LinearGradient id="grad" y2={10} x2={0} gradientUnits="userSpaceOnUse">
          <Stop offset="0%" stopColor="#FD749B" stopOpacity="1" />
          <Stop offset="100%" stopColor="#281AC8" stopOpacity="1" />
        </LinearGradient>
        <Circle cx="5" cy="5" r="5" fill="url(#grad)" />
      </Svg>
    </Animated.View>
  );
}
