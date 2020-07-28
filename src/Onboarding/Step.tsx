import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import HeadingText from "./HeadingText";
import { Button } from "../components";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    marginTop: 190,
  },
  contentContainer: {
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  text: {
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    fontSize: 15,
    marginBottom: 33,
  },
});

interface StepProps {
  image: any;
  label: string[];
  text: string;
  hasButton?: boolean;
  onPress: () => void;
}

export default function Step({
  label,
  image: { default: Image },
  text,
  hasButton,
  onPress,
}: StepProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image width={225} height={287} />
        <HeadingText text={label} />
        <Text style={styles.text}>{text}</Text>
        {hasButton && <Button text="continue" {...{ onPress }} />}
      </View>
    </View>
  );
}
