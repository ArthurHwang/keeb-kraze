import React from "react";

import styled from "styled-components";

import { SignIn } from "../components/SignIn";

export const Login: React.FC = () => (
  <StyledLogin>
    <SignIn />
  </StyledLogin>
);

const StyledLogin = styled("div")``;
