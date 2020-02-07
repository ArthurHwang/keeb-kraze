import React, { ReactElement } from "react";
import styled from "styled-components";
import { Directory } from "../components/Directory";

export const Homepage: React.FC = (): ReactElement => {
  return (
    <StyledHomepage className="homepage">
      <Directory />
      <StyledIntro>
        <h1>Welcome To Keeb Kraze!</h1>
        <p>
          Thank you for stopping by Keeb Kraze! Here you will find a selection
          of custom keyboards, parts, and accessories available to purchase.
        </p>
        <p>
          This website was made with React, TypeScript, Redux, Express,
          Styled-Components and Firebase.
        </p>
        <p>This is a for fun website I built to learn Redux-Saga in depth.</p>
        <p>Please feel free to make an account or login with Oauth.</p>
        <p>
          <span style={{ color: "red" }}>**Note**</span> Stripe Checkout is in
          test mode and does not take a real form of payment. Please use the
          test credit card supplied on the checkout page.
        </p>
      </StyledIntro>
    </StyledHomepage>
  );
};

const StyledHomepage = styled("div")`
  padding: 0;
  h1 {
    margin-top: 0;
  }
`;

const StyledIntro = styled("div")`
  border-bottom: 1px solid #dbdbdb;
  padding: 40px 15%;
  background-color: ${({ theme }) => theme.grey};
  display: block;

  @media (max-width: 500px) {
    padding: 40px 5px;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`;
