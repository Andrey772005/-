import styled from "styled-components";
import Button from "../../ui/button/button";
import Title from "../../ui/title/title";
import { Section } from "../../../styled";
import { Ul } from "../../../styled";

export const StyledSection = styled(Section)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	margin: 0;
	padding-top: 100px;
	box-sizing: border-box;
	align-items: center;
	text-align: center;
  box-shadow: 0 10px 20px rgb(0 0 0 / 4%), 0 2px 6px rgb(0 0 0 / 4%), 0 0 1px rgb(0 0 0 / 4%);
`;

export const StyledUl = styled(Ul)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	padding: 0;
	gap: 20px;
	list-style: none;
`;

export const StyledTitle = styled(Title)`
	margin-bottom: 64px;
	text-align: center;
`

export const StyledButton = styled(Button)`
	margin-top: 64px;
	margin-bottom: 100px;
`
