import { ButtonHTMLAttributes, FC } from "react";
import * as S from "./IconButton.styled";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
};

const IconButton: FC<IconButtonProps> = ({ children, color }) => {
  return <S.IconButton color={color}>{children}</S.IconButton>;
};

export default IconButton;
