import React, { useEffect, ReactElement, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
interface Props {
  history: any;
}

const _ThankYou: React.FC<Props> = ({ history }): ReactElement => {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const timedRedirect = setTimeout(() => {
      history.push("/");
    }, 5000);

    return () => clearTimeout(timedRedirect);
  }, [history]);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, [timer]);

  return (
    <StyledThankYou>
      <h2>Thank you for your order!</h2>
      <h3>You will receive an email confirmation shortly!</h3>
      <h3>Your cart has been cleared</h3>
      <h3>Redirecting in ... {timer} seconds</h3>
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

  h2,
  h3 {
    margin-bottom: 30px;
  }

  .home-link {
    margin-top: 30px;
  }
`;
