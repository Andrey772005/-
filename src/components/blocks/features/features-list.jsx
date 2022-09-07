import React from "react";
import Title from "../../ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";
import Button from "../../ui/button/button";
import "./feature-list.css";

function FeaturesList() {
	return (
		<section className="features-list">
			<Title>Почему фермерские продукты лучше?</Title>
			<ul className="feature-list__list">
				<li className="feature-list__item">
					<FeatureCard />
				</li>
			</ul>
			<Button>Купить</Button>
		</section>
	);
}

export default FeaturesList;
