import React, { useState, ReactElement } from "react";
import styled from "styled-components";
import { FormInput } from "./FormInput";
import { CustomButton } from "./CustomButton";
import { signUpStart } from "../redux/user/userActions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface Props {
  signUpStart: (userCredentials: any) => void;
}

const _SignUp: React.FC<Props> = ({ signUpStart }): ReactElement => {
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
    signUpStart({ displayName, email, password });
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signUpStart: (userCredentials: any) => dispatch(signUpStart(userCredentials))
});

export const SignUp = connect(null, mapDispatchToProps)(_SignUp);

const StyledSignUp = styled("div")`
  display: flex;
  flex-direction: column;
  width: 380px;
`;
