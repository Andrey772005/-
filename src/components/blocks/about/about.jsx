import React from "react";
import Title, {TitleLevel, TitleSize} from "../../ui/title/title";
import "./about.css";

function About() {
	return (
		<>
			<section className="about">
				<div className="about__wrapper">
					<Title size={TitleSize.BIG} level={TitleLevel.H1}>Магазин фермерских продуктов c доставкой</Title>
					<p className="about__text">Все продукты изготавливаются под заказ. Фермеры начинают
						готовить продукты за день до отправки заказа клиентам.
						Именно поэтому мы принимаем заказы заранее и доставляем
						продукты максимально свежими.
					</p>
				</div>
			</section>

		</>
	);
}

export default About;
