import React from "react";
import { View } from "react-native";
import { Props as RadioButtonProps } from "react-native-paper/lib/typescript/src/components/RadioButton/RadioButton";
import { FieldRenderProps } from "react-final-form";

import RadioButtonLabel from "./RadioButtonLabel";

type RadioButtomItem = [string, string];
type FieldProps = FieldRenderProps<string, HTMLElement & RadioButtonProps>;

export interface RadioButtonsProps extends FieldProps {
  items?: RadioButtomItem[];
}

const RadioButtons: React.SFC<RadioButtonsProps> = props => {
  const { input, meta, items } = props;
  const { onChange, value } = input;

  return (
    <View style={{ flexDirection: "row" }}>
      {items &&
        items.map(([label, val]) => (
          <RadioButtonLabel
            key={val}
            style={{ flex: 1 }}
            label={label}
            value={val}
            checkedValue={value}
            onChange={() => onChange(val)}
          />
        ))}
    </View>
  );
};

export default RadioButtons;
