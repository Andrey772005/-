import React from "react";
import { TitleLevel, TitleSize } from "../title/title";
import {
	ProductCard,
	ProductImage,
	ProductCardWrapper,
	ProductTitle,
	Price	} from "./styles";


function Product({product}) {
	return (
		<ProductCard>
			<ProductImage src={product.image} />
			<ProductCardWrapper>
				<ProductTitle level={TitleLevel.H3} size={TitleSize.MEDIUM}>
					{product.name}
				</ProductTitle>
				<Price> {product.price} руб. / {product.weight} гр.</Price>
			</ProductCardWrapper>
		</ProductCard>
	)
}

export default Product;
