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
    <View className={"relative"}>
      <TextInput
        className={
          "p-4 border border-gray82 w-64 rounded-lg text-nightRider text-sm"
        }
        {...{ onChangeText, value }}
      />
      <Icon style={"absolute right-0 mt-3 mr-3"} />
    </View>
  );
}
