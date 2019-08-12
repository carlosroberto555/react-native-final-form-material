import React from 'react'
import { TextInput } from 'react-native-paper'
import { FieldRenderProps } from 'react-final-form'

function TextArea(props: FieldRenderProps<string, HTMLElement & TextInput>) {
	const { input, meta, ...rest } = props
	const { onChange, onBlur, onFocus, value } = input
	return (
		<TextInput
			{...rest}
			multiline
			value={value}
			mode="outlined"
			numberOfLines={5}
			textAlignVertical="top"
			onBlur={() => onBlur()}
			onFocus={() => onFocus()}
			onChangeText={onChange}
		/>
	)
}

export default TextArea
