import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0;
  padding-top: ${(props) => props.theme.pagePadding};
  box-sizing: border-box;
  align-items: center;
  text-align: center;
`;

export default Section;
