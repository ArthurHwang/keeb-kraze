import React from "react";
import { Spinner } from "./Spinner";

export const WithSpinner: any = (WrappedComponent: any) => ({
  isLoading,
  ...otherProps
}: any) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};
