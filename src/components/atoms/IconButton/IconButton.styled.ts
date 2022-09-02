import styled from "@emotion/styled";

export const IconButton = styled.button<{ color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  outline: none;
  padding: 8px;
  background-color: ${({ color }) => color || "unset"};
  &:hover,
  &:focus,
  &:focus-visible {
    border: none;
    outline: none;
  }
  &:hover > svg {
    transform: scale(1.2);
  }
`;
