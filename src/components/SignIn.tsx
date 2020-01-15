import React, { useState } from "react";
import styled from "styled-components";
import { FormInput } from "./FormInput";

export const SignIn: React.FC = () => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setValues({ email: "", password: "" });
    console.log(values);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value } as any);
    console.log(setValues);
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
        <input type="submit" value="Submit Form" />
      </form>
    </StyledSignIn>
  );
};

const StyledSignIn = styled("div")`
  width: 30vw;
`;
