import React from "react";
import { TitleLevel, TitleSize } from "../../ui/title/title";
import {AboutTitle} from "./styles";
import { StyledSection, Wrapper, Text } from "./styles";

function About() {
	return (
			<StyledSection>
				<Wrapper>
					<AboutTitle level={TitleLevel.H1} size={TitleSize.BIG}>Магазин фермерских продуктов c доставкой</AboutTitle>
					<Text>Все продукты изготавливаются под заказ. Фермеры начинают
						готовить продукты за день до отправки заказа клиентам.
						Именно поэтому мы принимаем заказы заранее и доставляем
						продукты максимально свежими.
					</Text>
				</Wrapper>
			</StyledSection>
	);
}

export default About;
