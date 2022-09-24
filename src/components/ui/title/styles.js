import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
	font-family: ${(props) => props.theme.fontFamily};
	font-style: normal;
	font-weight: 700;
	line-height: 115%;
	color: ${(props) => props.theme.textColor};
  font-size: ${(props) => {
		let fontSize = "36px";
		if (props.$size === TitleSize.BIG) {
			fontSize = "44px";
		}
		if (props.$size === TitleSize.SMALL) {
			fontSize = "18px";
		}
		return fontSize
	}};
`;
