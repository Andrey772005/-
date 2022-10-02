import styled, { css } from "styled-components";
import { Ul, Li } from "../../../styled";

export const TabListItem = styled(Li)`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TabButton = styled.button`
  display: block;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  outline: none;
  ${(props) => 
					props.$isSelect
                  ? css`
                    background-color: ${props.theme.tabBackgroundColorActive};
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    color: ${props.theme.colorWhite};
                  `
                  : css`
                    background-color: ${props.theme.tabBackgroundColorInactive};
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    color: ${props.theme.textColor};
                  `}
`;

export const Header = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
	position: absolute;
	left: 0;
	top: 50px;
`;

export const Content = styled.div`
	margin-top: 100px;
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeight || "none"};
`;
