import React from 'react'
import { TextInput } from 'react-native-paper'
import { FieldRenderProps } from 'react-final-form'

type Props = FieldRenderProps<string, HTMLElement & TextInput> & {
	[key: string]: any
}

function Input(props: Props) {
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
