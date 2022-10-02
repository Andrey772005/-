import styled from "styled-components";
import { Img } from "../../../styled/img/image";
import Title from "../title/title";

export const ProductCard = styled.section`
  width: 726px;
  min-height: 288px;
  background: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled(Img)`
	width: 248px;
	height: 248px;
	margin-top: 20px;
	margin-left: 20px;
	margin-right: 20px;
	float: left;
`;

export const ProductTitle = styled(Title)`
	margin: 0;
	float: left;
`;

export const ProductCardWrapper = styled.div`
	float: right;
	position: relative;
	box-sizing: border-box;
	width: 418px;
	min-height: 248px;
	margin-top: 20px;
	margin-right: 20px;
`;

export const Price = styled.span`
  position: absolute;
	left: 0;
	bottom: 0;
	padding: 4px 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
	background: #d8ecfe;
	color: ${(props) => props.theme.textColor};
`;
