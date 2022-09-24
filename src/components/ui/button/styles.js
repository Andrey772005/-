import styled from "styled-components";

export const StyledButton = styled.a`
	display: block;
	min-width: 260px;
	min-height: 60px;
	height: 60px;
	margin-top: 64px;
	margin-bottom: 100px;
	font-size: ${(props) => props.theme.fontSizeDefault};
	font-weight: 700;
	line-height: 58px;
	color: ${(props) => props.theme.colorWhite};
	background-color: ${(props) => props.theme.buttonColor};
	text-align: center;
	text-decoration: none;
	border: none;
	background-image: none;
	box-shadow: none;
	cursor: pointer;
	transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

&:hover,
&:active {
	background-color: ${(props) => props.theme.buttonColorHover};
	box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
}

&:active {
	box-shadow: none;
}
`;
