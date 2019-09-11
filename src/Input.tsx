import React from 'react'
import { TextInput } from 'react-native-paper'
import { FieldRenderProps } from 'react-final-form'

type FieldProps = FieldRenderProps<string, HTMLElement & TextInput>

export interface InputProps extends FieldProps, TextInput {
	[key: string]: any
}

const Input: React.FC<InputProps> = props => {
	const { input, meta, innerRef, style, ...rest } = props
	const { onChange, onBlur, onFocus, value } = input
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
	)
}

export default Input
