import React from "react";
import { View, Text, Dimensions } from "react-native";
import tailwind from "tailwind-rn";

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
    <View style={[{ width }, tailwind("flex-1 mt-48")]}>
      <View style={tailwind("px-3 items-center")}>
        <Image width={225} height={287} />
        <HeadingText text={label} />
        <Text
          style={[
            { fontFamily: "Poppins-Regular" },
            tailwind("mb-3 text-base text-center"),
          ]}
        >
          {text}
        </Text>
        {hasButton && <Button text="continue" {...{ onPress }} />}
      </View>
    </View>
  );
}
