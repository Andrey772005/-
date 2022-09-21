import React from "react";
import Title, {TitleSize} from "../title/title";
import image from "../feature-card/eat.svg";
import "./feature-card.css";

function FeatureCard({feature, header, about}) {
	return (
		<article className="feature-card">
			<img
				src={image}
				className="feature-card__image"
				width={52}
				height={52}
			/>
			<span className="feature-card__feature">
				{feature}
			</span>
			<Title size={TitleSize.SMALL}>{header}</Title>
			<p
				className="feature-card__text"
				dangerouslySetInnerHTML={{__html: about}}
			/>
		</article>
	);
}

export default FeatureCard;
