import styled from "styled-components";
import {Section} from "../../../styled";
import Label from "../../../styled/label/label";
import Button from "../../ui/button/button";

export const BuyPage = styled.form`
	position: relative;
	padding: 40px 90px 0;
	box-sizing: border-box;
	min-height: 768px;
  background: #f7f7f7;
`;

export const BuyPageWrapper = styled.div`
	display: grid;
	grid-template-columns: 353px 727px;
	grid-template-rows: 355px 315px;
	gap: 20px;
`;

export const ChooseProductPanel = styled(Section)`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	padding: 0 20px ;
	align-items: flex-start;
	background: ${(props) => props.theme.colorWhite };
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
`;

export const OrderPanel = styled(Section)`
	grid-column: 1 / 2;
	grid-row: 2 / 3;
	padding: 0 20px;
  align-items: flex-start;
  background: ${(props) => props.theme.colorWhite };
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
`;

export const PriceLabel = styled(Label)`
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	margin-top: 20px;
	margin-bottom: 8px;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
	margin-bottom: 32px;
	color: ${(props) => props.theme.textColor};
`;

export const BuyButton = styled(Button)`
	min-width: 314px;
`;

export const ProductSlider = styled(Section)`
	grid-column: 2 / 3;
	grid-row: 1 / 3;
	padding: 0;
`;
