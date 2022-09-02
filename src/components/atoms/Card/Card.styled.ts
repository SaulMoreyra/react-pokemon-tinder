import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { IStatus } from "../../../interfaces/IStatus";

const accept = keyframes`
  from {
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(40deg) translateY(-80px);
    opacity: 0;
  }
`;

const reject = keyframes`
  from {
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(-40deg) translateY(-80px);
    opacity: 0;
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const boost = keyframes`
  from {
    transform: scale(1.0);
    opacity: 1;
  }
  to {
    transform: scale(1.2);
    opacity: 0;
  }
`;

const ANIMATIONS = {
  visible: appear,
  reject: reject,
  accept: accept,
  boost: boost,
};

export const BaseCard = styled.div`
  border-radius: 20px;
  min-height: 400px;
  min-width: 320px;
`;

export const Card = styled(BaseCard)<{
  color?: string;
  variant: IStatus;
}>`
  display: ${({ variant }) => (variant === "invisible" ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  position: relative;
  transform-origin: 50% 99%;
  background: ${({ color }) => `${color}8C`};
  ${({ variant }) =>
    variant !== "invisible"
      ? css`
          animation: ${ANIMATIONS[variant]} 0.7s ease-out;
        `
      : ""}
  & > img {
    z-index: 1;
    max-width: 300px;
    max-height: 300px;
  }
  &::after {
    content: "";
    background: white;
    background-color: white;
    opacity: 0.7;
    top: 60px;
    height: 230px;
    width: 230px;
    border-radius: 50%;
    position: absolute;
  }
`;
