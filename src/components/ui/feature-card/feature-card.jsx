import React from "react";
import Title, {TitleSize} from "../title/title";
import "./feature-card.css";

function FeatureCard({header, feature, about, isNegative, image}) {
	return (
		<section className={`feature${isNegative ? " feature_negative" : ""}`}>
			<img
				className="feature-card__image"
				width={56}
				height={56}
				src={image}
				alt="Еда намного вкуснее"
			/>
			<span className={`feature-card__feature${isNegative ? " feature-card__negative" : ""}`}>
				{feature}
			</span>
			<Title size={TitleSize.SMALL}>{header}</Title>
			<p
				className="feature-card__text"
				dangerouslySetInnerHTML={{__html: about}}
			/>
		</section>
	);
}

export default FeatureCard;
