import styled from "@emotion/styled";

const Button = styled.button`
  color: ${({ theme }) => theme.typography};
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export default Button;
