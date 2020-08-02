import React from "react";
import {
  View,
  TextInput,
  TextInputProps as TextInputPropsBase,
} from "react-native";

interface TextInputProps extends TextInputPropsBase {
  icon: any;
}

export default function InputText({
  icon: Icon,
  onChangeText,
  value,
}: TextInputProps) {
  return (
    <View>
      <TextInput {...{ onChangeText, value }} />
      <Icon style={"absolute right-0 mt-3 mr-3"} />
    </View>
  );
}
