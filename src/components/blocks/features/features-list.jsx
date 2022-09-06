import React from "react";
import Title from "../../ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";

function FeaturesList() {
	return (
		<section className="features-list">
			<Title>Почему фермерские продукты лучше?</Title>
			<ul className="feature-list__list">
				<li className="feature-list__item">
					<FeatureCard />
				</li>
			</ul>
		</section>
	);
}

export default FeaturesList;
