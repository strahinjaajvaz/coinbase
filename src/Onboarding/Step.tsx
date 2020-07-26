import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import HeadingText from "./HeadingText";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    marginTop: 190,
  },
  contentContainer: {
    alignItems: "center",
    paddingLeft: 44,
    paddingRight: 44,
  },
});

interface StepProps {
  image: any;
  label: string[];
  text: string;
}

export default function Step({
  label,
  image: { default: Image },
  text,
}: StepProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image width={225} height={287} />
        <HeadingText text={label} />
        <Text>{text}</Text>
      </View>
    </View>
  );
}
