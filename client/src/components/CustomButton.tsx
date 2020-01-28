import React, { ReactElement } from "react";
import styled from "styled-components";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: string;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

export const CustomButton: React.FC<Props> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}): ReactElement => (
  <StyledCustomButton
    className={`${inverted && "inverted"} ${isGoogleSignIn &&
      "google-sign-in"} custom-button`}
    {...otherProps}
  >
    {children}
  </StyledCustomButton>
);

const StyledCustomButton = styled("button")`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ${({ theme }) => theme.black};
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &.inverted {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    border: 1px solid black;
    &:hover {
      background-color: ${({ theme }) => theme.black};
      color: white;
      border: none;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.white};
    color: black;
    border: 1px solid black;
  }

  &.google-sign-in {
    background-color: ${({ theme }) => theme.green};
  }
`;
