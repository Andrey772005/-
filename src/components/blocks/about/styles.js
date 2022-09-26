import styled from "styled-components";
import { Section } from "../../../styled";
import { StyledTitle } from "../../ui/title/styles";
import aboutImage from "../../../assets/about.svg";


const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const AboutTitle = styled(StyledTitle)`
	text-align: left;
	font-size: 44px;
`;

export const StyledSection = styled(Section)`
  position: relative;
	background: ${(props) => props.theme.colorForAboutBackground};
	padding: 150px 553px 127px 90px;
	align-items: center;
	z-index: 1;

  &::after {
    position: absolute;
    content: "";
    top: 35px;
    left: 745px;
    width: 446px;
    height: 627px;
    background-repeat: no-repeat;
    z-index: 1;
    background-image: url(${aboutImage});
  }
`;

export const Wrapper = styled.div`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	position: relative;
	width: 650px;
	z-index: 3;
`;

export const Text = styled(Paragraph)`
	margin-top: ${(props) => props.theme.indent};
	padding-right: 122px;
	margin-bottom: 40px;
	text-align: left;


`;
