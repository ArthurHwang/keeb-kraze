import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ThankYou: React.FC = () => (
  <StyledThankYou>
    <h2>Thank you for your order!</h2>
    <h3>You will receive an email confirmation shortly!</h3>
    <Link className="home-link" to="/">
      Go Home
    </Link>
  </StyledThankYou>
);

const StyledThankYou = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;

  h2 {
    margin-bottom: 30px;
  }

  .home-link {
    margin-top: 30px;
  }
`;
