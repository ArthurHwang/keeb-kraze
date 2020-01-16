import React, { useState } from "react";
import styled from "styled-components";
import { FormInput } from "./FormInput";
import { CustomButton } from "./CustomButton";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

export const SignUp: React.FC = () => {
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setValues({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value } as any);
  };

  return (
    <StyledSignUp>
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={values.displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton buttonType="submit">Submit</CustomButton>
      </form>
    </StyledSignUp>
  );
};

const StyledSignUp = styled("div")`
  display: flex;
  flex-direction: column;
  width: 380px;

  .title {
    /* margin: 10px 0; */
  }
`;
