import { ReactNode } from "react";

interface ICardProps {
  children: ReactNode;
}
const Card: React.FC<ICardProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Card;
