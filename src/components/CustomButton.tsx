import React from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  buttonType?: string;
  isGoogleSignIn?: boolean;
  // onClick;
}

export const CustomButton: React.FC<Props> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => (
  <StyledCustomButton
    className={`${isGoogleSignIn ? "google-sign-in" : ""}`}
    {...otherProps}
  >
    {children}
  </StyledCustomButton>
);

const StyledCustomButton = styled("button")`
  /* min-width: 165px; */
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

  &:hover {
    background-color: ${({ theme }) => theme.white};
    color: black;
    border: 1px solid black;
  }

  &.google-sign-in {
    background-color: ${({ theme }) => theme.green};
  }
`;
