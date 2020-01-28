import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
interface Props {
  history: any;
}
const _ThankYou: React.FC<Props> = ({ history }) => {
  useEffect(() => {
    const timedRedirect = setTimeout(() => {
      history.push("/");
    }, 5000);

    return () => clearTimeout(timedRedirect);
  }, []);

  return (
    <StyledThankYou>
      <h2>Thank you for your order!</h2>
      <h3>You will receive an email confirmation shortly!</h3>
      <Link className="home-link" to="/">
        Go Home
      </Link>
    </StyledThankYou>
  );
};

export const ThankYou = withRouter(_ThankYou);
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
