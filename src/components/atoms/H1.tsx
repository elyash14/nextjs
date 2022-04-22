import styled from "@emotion/styled";

const H1 = styled.h1`
  color: ${({ theme }) => theme.typography};
  font-weight: 900;
  text-rendering: optimizeLegibility;
  font-size: 2.5rem;
  line-height: 1.1;
`;

export default H1;
