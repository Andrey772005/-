import React from "react";
import {TitleLevel, TitleSize} from "../title/title";
import { SectionCard, Image, FeatureOwner, FeatureText, FeatureTitle } from "./styles";

function FeatureCard({header, feature, about, isNegative, image}) {
	return (
		<SectionCard isNegative={isNegative}>
			<Image
				className="feature-card__image"
				width={56}
				height={56}
				src={image}
				alt="Еда намного вкуснее"
			/>
			<FeatureOwner isNegative={isNegative}>
				{feature}
			</FeatureOwner>
			<FeatureTitle size={TitleSize.SMALL} level={TitleLevel.H3}>{header}</FeatureTitle>
			<FeatureText
				className="feature-card__text"
				dangerouslySetInnerHTML={{__html: about}}
			/>
		</SectionCard>
	);
}

export default FeatureCard;
