import React from "react";
import styled from "styled-components";
import errorImage from "../assets/Caution-Tape-big.png";

export default class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error: any) {
    console.log(error);
    return {
      hasErrored: true
    };
  }

  componentDidCatch(error: any, info: any) {
    console.log({ error: error, info: info });
  }

  render() {
    // @ts-ignore
    if (this.state.hasErrored) {
      // @ts-ignore
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={errorImage} />
          <ErrorImageText>
            You have reached this page in result of an error, please navigate
            home
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled("div")<{ imageUrl: string }>`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;
