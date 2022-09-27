import styled from "styled-components";
import Title from "../title/title";

export const SectionCard = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	position: relative;
	width: 540px;
	height: 197px;
	background: ${(props) => props.isNegative 
		? props.theme.colorForNegativeCard
		: props.theme.colorForPositiveCard};
`;

export const Image = styled.img`
	position: absolute;
	width: 52px;
	height: 52px;
	top: 22px;
	left: 20px;
`;

export const FeatureOwner = styled.span`
	display: inline;
	margin-left: 92px;
	margin-top: 20px;
	margin-bottom: 0;
	padding: 2px 10px;
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	width: 178px;
	height: 25px;
	background: ${(props) => props.isNegative
		? props.theme.colorForNegativeFeature
		: props.theme.colorForPositiveFeature};
	color: ${(props) => props.theme.colorWhite};
	text-align: center;
	box-sizing: border-box;
`;

export const FeatureTitle = styled(Title)`
	display: inline;
	box-sizing: border-box;
	text-align: left;
	margin-top: 8px;
	margin-left: 90px;
	margin-bottom: 0;
`;

export const FeatureText = styled.p`
	font-size: 18px;
	line-height: 150%;
	width: 500px;
	height: auto;
	text-align: left;
	margin: 20px 20px;
`;



