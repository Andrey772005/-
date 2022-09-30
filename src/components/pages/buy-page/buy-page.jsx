import React from "react";
import Title, {TitleSize, TitleLevel} from "../../ui/title/title";
import {AddressInput} from "../../ui/input/input";
import {
	BuyPage,
	BuyPageWrapper,
	ChooseProductPanel,
	OrderPanel,
	ProductSlider} from "./styles";

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
					</OrderPanel>
					<ProductSlider>

					</ProductSlider>
				</BuyPageWrapper>
			</BuyPage>
		</>
	)
}

export default ProductPage;
