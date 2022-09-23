import styled, { css } from "styled-components";

const gridList = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: ${(props) => props.theme.indent};
  list-style: none;
	
	li {
		list-style: none;
	}
`;

const Ul = styled.ul`
	margin: 0;
	padding: 0;
	${(props) => (props.$isGridList ? gridList : "")}
`;

export default Ul;
