import styled from "@emotion/styled";

const A = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 1px 0 0 currentColor;
  text-decoration: none;
  &:hover {
    box-shadow: none;
  }
`;

export default A;
