import React from "react";
import Label from "../../../styled/label/label";
import HiddenInput from "../../../styled/visually-hidden/visually-hidden";

function Checkbox({onClick, labelComponent, isChecked, name, value, text, onChange, ...props}) {
	const LabelComponent = labelComponent;

	return (
		<Label>
			<HiddenInput
				value={value}
				checked={isChecked}
				name={name}
				onChange={() => onChange(value)}
				{...props}
				type="checkbox"
			/>
			<LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
				{text}
			</LabelComponent>
		</Label>
	);
}

export default Checkbox;
