import React, { useState } from "react";
import styled from "styled-components";
import { FormInput } from "./FormInput";
import { CustomButton } from "./CustomButton";
import { signInWithGoogle } from "../firebase/firebase.utils";

export const SignIn: React.FC = () => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setValues({ email: "", password: "" });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value } as any);
  };

  return (
    <StyledSignIn>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          label="email"
          value={values.email}
          required
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          label="password"
          value={values.password}
          required
        />

        <CustomButton buttonType="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>
          Sign In With Google
        </CustomButton>
      </form>
    </StyledSignIn>
  );
};

const StyledSignIn = styled("div")`
  width: 30vw;

  display: flex;
  flex-direction: column;

  .title {
    margin: 10px 0;
  }
`;
