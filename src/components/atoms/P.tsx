import styled from "@emotion/styled";

interface IPProps {
  color?: string;
}
const P = styled.p<IPProps>`
  color: ${(props) => (props.color ? props.color : props.theme.typography)};
`;

export default P;
