import React from "react";
import { TitleLevel, TitleSize } from "../title/title";
import {
	ProductCard,
	ProductImage,
	ProductCardWrapper,
	ProductTitle,
	Price	} from "./styles";
import Tabs from "../tabs/tabs";
import OptionsList from "../options-list/options-list";

function Product({product}) {
	const tabsList = [
		{
			title: "Oписание",
			content: product.description
		},
		{
			title: "Характеристики",
			content: <OptionsList list={product.specifications} />
		},
		{
			title: "Свойства",
			content: <OptionsList list={product.structure} />
		}
	];
	return (
		<ProductCard>
			<ProductImage src={product.image} />
			<ProductCardWrapper>
				<ProductTitle level={TitleLevel.H3} size={TitleSize.MEDIUM}>
					{product.name}
				</ProductTitle>
				<Tabs maxContentHeight="105px" tabsList={tabsList} />
				<Price>
					{product.price} руб. / {product.weight} гр.
				</Price>
			</ProductCardWrapper>
		</ProductCard>
	)
}

export default Product;
