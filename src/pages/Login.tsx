import React from "react";

import styled from "styled-components";

import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";

export const Login: React.FC = () => (
  <StyledLogin>
    <SignIn />
    <SignUp />
  </StyledLogin>
);

const StyledLogin = styled("div")`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;
