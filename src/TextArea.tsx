import React from 'react'
import { TextInput, DefaultTheme } from 'react-native-paper'
import { FieldRenderProps } from 'react-final-form'
import { View, Text } from 'react-native'

type FieldProps = FieldRenderProps<string, HTMLElement & TextInput>

export interface TextAreaProps extends FieldProps {
	[key: string]: any
}

const TextArea: React.SFC<TextAreaProps> = props => {
	const { input, meta, innerRef, ...rest } = props
	const { onChange, onBlur, onFocus, value } = input
	const hasError = !!meta.error && meta.touched
	return (
		<View>
			<TextInput
				multiline
				ref={innerRef}
				value={value}
				mode="outlined"
				numberOfLines={5}
				textAlignVertical="top"
				onBlur={() => onBlur()}
				onFocus={() => onFocus()}
				onChangeText={onChange}
				{...rest}
			/>
			{hasError && (
				<Text
					style={{
						color: DefaultTheme.colors.error,
						marginTop: 4,
						paddingHorizontal: 2
					}}
				>
					{meta.error}
				</Text>
			)}
		</View>
	)
}

export default TextArea
