import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import HeadingText from "./HeadingText";
import { Button } from "../components";

const { width } = Dimensions.get("window");

interface StepProps {
  image: any;
  label: string[];
  text: string;
  hasButton?: boolean;
  onPress?: () => void;
}

export default function Step({
  label,
  image: { default: Image },
  text,
  hasButton,
  onPress = () => {},
}: StepProps) {
  return (
    <View style={[{ width }, styles.container]}>
      <View style={styles.subContaienr}>
        <Image width={225} height={287} />
        <HeadingText text={label} />
        <Text style={[styles.text]}>{text}</Text>
        {hasButton && <Button text="continue" {...{ onPress }} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 160,
  },
  subContaienr: {
    paddingHorizontal: 40,
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-Regular",
    marginBottom: 16,
    color: "#333333",
    textAlign: "center",
  },
});
