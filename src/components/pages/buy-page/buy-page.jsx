import React from "react";
import Title, {TitleSize, TitleLevel} from "../../ui/title/title";
import {AddressInput} from "../../ui/input/input";
import Product from "../../ui/product-card/product-card";
import {
	BuyPage,
	BuyPageWrapper,
	ChooseProductPanel,
	OrderPanel,
	ProductSlider,
	PriceLabel,
	BuyButton,
	ProductSwiper,
	Price} from "./styles";

import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "../../swiper/swiper-bundle.min.css";
import products from "../../mocks/products";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

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
						<ProductSwiper
							spaceBetween={12}
							direction="vertical"
							slidesPerView="auto"
							scrollbar={{ draggable: true }}
							mousewheel
							pagination={{
								type: "fanction"
							}}
						>
							{products.map((product) => (
								<SwiperSlide key={product.id}>
									<Product product={product} />
								</SwiperSlide>
							))}
						</ProductSwiper>
					</ProductSlider>
				</BuyPageWrapper>
			</BuyPage>
		</>
	)
}

export default ProductPage;
