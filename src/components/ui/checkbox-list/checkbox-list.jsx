import React from "react";
import Checkbox from "../../../components/ui/checkbox/checkbox";
import { Ul, Li } from "../../../styled";

function CheckboxList({selectValues, labelComponent, options, name, onChange, isGridList, onClickLabel = () => {}}) {
	const handleChange = (value) => {
		const newValue = [...selectValues];
		const indexValue = newValue.indexOf(value);
		if (indexValue === -1) {
			newValue.push(value);
		} else {
			newValue.splice(indexValue, 1);
		}
		onChange && onChange(newValue);
	};

	return (
		<Ul $isGridList={isGridList}>
			{options.map((option, index) => (
				<Li key={option.value}>
					<Checkbox
						labelComponent={labelComponent}
						selectValues={selectValues}
						isChecked={selectValues.includes(option.value)}
						name={name}
						value={option.value}
						text={option.title}
						onClick={(value) => onClickLabel(value, index)}
						onChange={handleChange}
					/>
				</Li>
			))}
		</Ul>
	);
}

export default CheckboxList;
