import React from "react";
import Title, {TitleSize, TitleLevel} from "../../ui/title/title";
import {AddressInput} from "../../ui/input/input";
import {
	BuyPage,
	BuyPageWrapper,
	ChooseProductPanel,
	OrderPanel,
	ProductSlider,
	PriceLabel,
	Price,
	BuyButton} from "./styles";

function ProductPage() {
	return (
		<>
			<BuyPage>
				<BuyPageWrapper>
					<ChooseProductPanel>
						<Title level={TitleLevel.H3} size={TitleSize.SMALL}>Выберите продукты</Title>
					</ChooseProductPanel>
					<OrderPanel>
						<Title level={TitleLevel.H3} size={TitleSize.SMALL}>Сделать заказ</Title>
						<AddressInput placeholder="Введите адрес доставки"/>
						<PriceLabel>Цена</PriceLabel>
						<Price>1200 руб.</Price>
						<BuyButton minWidth={314} link="/buy">Купить</BuyButton>
					</OrderPanel>
					<ProductSlider>

					</ProductSlider>
				</BuyPageWrapper>
			</BuyPage>
		</>
	)
}

export default ProductPage;
