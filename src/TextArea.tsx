import React from 'react'
import { TextInput } from 'react-native-paper'
import { FieldRenderProps } from 'react-final-form'

type FieldProps = FieldRenderProps<string, HTMLElement & TextInput>

export interface TextAreaProps extends FieldProps, TextInput {}

const TextArea: React.SFC<TextAreaProps> = props => {
	const { input, meta, ...rest } = props
	const { onChange, onBlur, onFocus, value } = input
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
	)
}

export default TextArea
