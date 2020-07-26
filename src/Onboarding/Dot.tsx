import React from "react";
import { Svg, Circle, LinearGradient, Stop } from "react-native-svg";
import Animated, { interpolate, Extrapolate } from "react-native-reanimated";

interface DotProps {
  current: boolean; //Animated.Node<number>;
  index: number;
}

export default function Dot({ current, index }: DotProps) {
  console.log(current);
  // const scale = interpolate(current, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 10],
  //   extrapolate: Extrapolate.CLAMP,
  // });
  // console.log(scale);
  return (
    <Animated.View
      style={{
        height: 10,
        width: 10,
        marginHorizontal: 6,
        // transform: [{ scale }],
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
