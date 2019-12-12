import React from "react";
import { TextInput } from "react-native-paper";
import { TextInputProps } from "react-native-paper/lib/typescript/src/components/TextInput/TextInput";
import { FieldRenderProps } from "react-final-form";

type FieldProps = FieldRenderProps<string, HTMLElement & TextInputProps>;

export interface TextAreaProps extends FieldProps, TextInputProps {}

const TextArea: React.FC<TextAreaProps> = props => {
  const { input, meta, ...rest } = props;
  const { onChange, onBlur, onFocus, value } = input;
  return (
    <TextInput
      multiline
      value={value}
      mode="outlined"
      numberOfLines={5}
      textAlignVertical="top"
      onBlur={() => onBlur()}
      onFocus={() => onFocus()}
      onChangeText={onChange}
      {...rest}
    />
  );
};

export default TextArea;
