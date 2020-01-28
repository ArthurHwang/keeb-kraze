import React, { ReactElement } from "react";
import styled from "styled-components";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";

export const Login: React.FC = (): ReactElement => (
  <StyledLogin>
    <SignIn />
    <StyledDivider />
    <SignUp />
  </StyledLogin>
);

const StyledLogin = styled("div")`
  width: 850px;
  display: flex;
  justify-content: space-evenly;
  margin: 30px auto;
`;

const StyledDivider = styled("div")`
  border: 1px solid ${({ theme }) => theme.grey};
`;
