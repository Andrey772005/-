import styled from "styled-components";

export const FooterSection = styled.footer`
	display: flex;
	justify-content: space-around;
	width: 1280px;
	margin: 0 auto;
	height: 80px;
	background-color: #ffffff;
	align-items: center;
	z-index: 5;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04),
		0 2px 6px rgba(0, 0, 0, 0.04), 
		0 0 1px rgba(0, 0, 0, 0.04);
`;

export const FooterCopyRight = styled.span`
	min-height: 43px;
	min-width: 148px;
	max-width: 700px;
	margin-left: 380px;
	padding: 8px 12px;
	font-size: 18px;
	border-radius: 5px;
	vertical-align: middle;
	text-align: right;
	box-sizing: border-box;
`;
