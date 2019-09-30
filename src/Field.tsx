import React from 'react'
import { Field as FFField, FieldProps as FFFieldProps } from 'react-final-form'

export type FieldProps<
	FieldValue,
	T extends React.ReactElement & HTMLElement
> = FFFieldProps<FieldValue, T> & {
	component: any
}

function Field(props: FieldProps<any, any>) {
	return <FFField {...props} />
}

export default Field
