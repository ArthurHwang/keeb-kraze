import React from "react";
import styled from "styled-components";

export const WithSpinner: any = (WrappedComponent: any) => ({
  isLoading,
  ...otherProps
}: any) => {
  return isLoading ? (
    <SpinnerContainer>
      <SpinnerOverlay />
    </SpinnerContainer>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

const SpinnerOverlay = styled("div")`
  /* height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
`;

const SpinnerContainer = styled("div")`
  display: inline-block;
  /* margin: 0 auto; */
  width: 50px;
  /* justify-self: center; */
  /* align-self: middle; */
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
