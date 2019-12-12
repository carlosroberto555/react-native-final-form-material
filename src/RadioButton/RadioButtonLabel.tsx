import React from "react";
import { View, TouchableOpacity, ViewProps } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import { Props as RadioButtonProps } from "react-native-paper/lib/typescript/src/components/RadioButton/RadioButton";

interface Props extends RadioButtonProps, ViewProps {
  label: string;
  checkedValue: any;
  onChange: (val: any) => void;
}

const RadioButtonLabel = (props: Props) => {
  const { label, onChange, checkedValue, ...rest } = props;

  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <RadioButton.Android
        {...rest}
        onPress={() => onChange(rest.value)}
        status={checkedValue === rest.value ? "checked" : "unchecked"}
        color="#333"
      />
      <TouchableOpacity
        hitSlop={{ top: 8, bottom: 8, right: 24 }}
        onPress={() => onChange(rest.value)}
      >
        <Text>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButtonLabel;
