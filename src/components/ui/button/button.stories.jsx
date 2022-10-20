import React from "react";
import Button from "./button";

export default {
	title: "Кнопка (Button)"
};

const Template = (args) => <Button {...args} />;

export const BuyButton  = Template.bind({});

BuyButton.args = {
	children: 'Купить',
	primary: true,
	label: 'Button'
}

BuyButton.argTypes = { onClick: { action: 'clicked' }, colors: { control: 'color' } }

