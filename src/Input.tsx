import React from 'react'
import { TextInput } from 'react-native-paper'
import { FieldRenderProps } from 'react-final-form'

type Props = FieldRenderProps<string, HTMLElement & TextInput> & {
	[key: string]: any
}

function FieldInput(props: Props) {
	const { input, meta, innerRef, ...rest } = props
	const { onChange, onBlur, onFocus, value } = input
	return (
		<TextInput
			{...rest}
			ref={innerRef}
			value={value}
			mode="outlined"
			style={{ marginBottom: 8 }}
			onBlur={() => onBlur()}
			onFocus={() => onFocus()}
			onChangeText={onChange}
		/>
	)
}

export default FieldInput
