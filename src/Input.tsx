import React from 'react'
import { TextInput, DefaultTheme } from 'react-native-paper'
import { FieldRenderProps } from 'react-final-form'
import { View, Text } from 'react-native'

type FieldProps = FieldRenderProps<string, HTMLElement & TextInput>

export interface InputProps extends FieldProps {
	[key: string]: any
}

const Input: React.SFC<InputProps> = props => {
	const { input, meta, innerRef, ...rest } = props
	const { onChange, onBlur, onFocus, value } = input
	const hasError = !!meta.error && meta.touched
	return (
		<View style={{ marginBottom: 8 }}>
			<TextInput
				ref={innerRef}
				value={value}
				error={hasError}
				mode="outlined"
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

export default Input
