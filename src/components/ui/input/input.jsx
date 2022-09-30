import styled from "styled-components";

export const AddressInput = styled.input`
	display: flex;
	width: 100%;
	height: 48px;
  background: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;
	
	::placeholder {
		color: ${(props) => props.theme.textColor};
	}
`;
