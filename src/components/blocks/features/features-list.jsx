import React from "react";
import { StyledSection } from "./styles";
import { StyledUl } from "./styles";
import { StyledTitle } from "./styles";
import FeatureCard from "../../ui/feature-card/feature-card";
import { StyledButton } from "./styles";
import { TitleLevel } from "../../ui/title/title";
import { TitleSize } from "../../ui/title/title";

function FeaturesList( {features} ) {
	return (
		<StyledSection>
			{features?.length ? (
				<>
					<StyledTitle level={TitleLevel.H2} size={TitleSize.DEFAULT}>Почему фермерские продукты лучше?</StyledTitle>
					<StyledUl>
						{features.map((feature) => (
							<li className="feature-list__item" key={feature.id}>
								<FeatureCard {...feature} />
							</li>
						))}
					</StyledUl>
					<StyledButton minWidth={260} link="/buy">
						Купить
					</StyledButton>
				</>
			) : null}
		</StyledSection>
	);
}

export default FeaturesList;
