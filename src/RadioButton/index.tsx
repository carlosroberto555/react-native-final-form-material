import React from 'react'
import { View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { FieldRenderProps } from 'react-final-form'

import RadioButtonLabel from './RadioButtonLabel'

type RadioButtomItem = [string, string]

interface Props extends FieldRenderProps<string, HTMLElement & RadioButton> {
	items?: RadioButtomItem[]
}

function RadioButtons(props: Props) {
	const { input, meta, items } = props
	const { onChange, value } = input

	return (
		<View style={{ flexDirection: 'row' }}>
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
	)
}

export default RadioButtons
