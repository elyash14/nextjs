import styled from "@emotion/styled";
import H1 from "components/atoms/H1";

const CardTitle = styled(H1)`
  color: ${({ theme }) =>
    theme.isDark ? theme.colors.secondary : theme.colors.primary};
  font-family: Montserrat, sans-serif;
  font-size: 1.75rem;
  margin-bottom: 0.4375rem;
  margin-top: 3.5rem;
`;

export default CardTitle;
