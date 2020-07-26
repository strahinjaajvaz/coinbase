import React from "react";
import { Svg, Circle, LinearGradient, Stop } from "react-native-svg";
import Animated, { interpolate, Extrapolate } from "react-native-reanimated";
import { View } from "react-native";

interface DotProps {
  current: Animated.Node<number>;
  index: number;
}

export default function Dot({ current, index }: DotProps) {
  return (
    <View
      style={{
        height: 10,
        width: 10,
        marginHorizontal: 6,
      }}
    >
      <Svg height="100%" width="100%">
        <LinearGradient id="grad" y2={10} x2={0} gradientUnits="userSpaceOnUse">
          <Stop offset="0%" stopColor="#FD749B" stopOpacity="1" />
          <Stop offset="100%" stopColor="#281AC8" stopOpacity="1" />
        </LinearGradient>
        <Circle cx="5" cy="5" r="5" fill="url(#grad)" />
      </Svg>
    </View>
  );
}
