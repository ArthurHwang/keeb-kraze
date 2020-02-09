import React, { useState, ReactElement } from "react";
import styled from "styled-components";
import { FormInput } from "./FormInput";
import { CustomButton } from "./CustomButton";
import { googleSignInStart, emailSignInStart } from "../redux/user/userActions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface Props {
  googleSignInStart: () => void;
  emailSignInStart: (email: string, password: string) => void;
}

const _SignIn: React.FC<Props> = ({
  googleSignInStart,
  emailSignInStart
}): ReactElement => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const { email, password } = values;
    emailSignInStart(email, password);
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
          label="Email"
          value={values.email}
          required
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          label="Password"
          value={values.password}
          required
        />
        <div className="buttons">
          <CustomButton buttonType="submit">Sign In</CustomButton>
          <CustomButton
            buttonType="button"
            onClick={googleSignInStart}
            isGoogleSignIn
            inverted
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </StyledSignIn>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) =>
    dispatch(emailSignInStart({ email, password }))
});

export const SignIn = connect(null, mapDispatchToProps)(_SignIn);

const StyledSignIn = styled("div")`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media (max-width: 860px) {
    margin: 0 auto 40px;
  }

  .title {
    margin: 10px 0;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;
