import React from "react";
import { TextInput } from "react-native-paper";
import { TextInputProps } from "react-native-paper/lib/typescript/src/components/TextInput/TextInput";
import { FieldRenderProps } from "react-final-form";

type FieldProps = FieldRenderProps<string, HTMLElement & TextInputProps>;

export interface InputProps extends FieldProps, TextInputProps {
  [key: string]: any;
}

const Input: React.FC<InputProps> = props => {
  const { input, meta, innerRef, style, ...rest } = props;
  const { onChange, onBlur, onFocus, value } = input;
  return (
    <TextInput
      ref={innerRef}
      value={value}
      mode="outlined"
      style={{ marginBottom: 8, ...style }}
      onBlur={() => onBlur()}
      onFocus={() => onFocus()}
      onChangeText={onChange}
      {...rest}
    />
  );
};

export default Input;
