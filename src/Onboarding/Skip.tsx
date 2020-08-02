import React from "react";
import { TouchableOpacity, Text, Dimensions, StyleSheet } from "react-native";
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
      activeOpacity={1}
      style={styles.container}
      {...{ onPress }}
    >
      <Animated.View style={{ opacity }}>
        <Text style={styles.text}>{`Skip >>`}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 40,
    top: 88,
    zIndex: 10,
  },
  text: {
    fontFamily: "Poppins-Bold",
    color: "#979797",
  },
});
