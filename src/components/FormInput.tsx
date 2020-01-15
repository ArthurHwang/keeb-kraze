import React from "react";
import styled from "styled-components";

interface Props {
  handleChange?(e: React.ChangeEvent<HTMLInputElement>): Function | void;
  label?: any;
  value: string;
  name?: string;
  type: string;
  required?: any;
}

export const FormInput: React.FC<Props> = ({
  handleChange,
  label,
  ...otherProps
}) => (
  <StyledFormInput>
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value && otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </StyledFormInput>
);

const StyledFormInput = styled("div")`
  position: relative;
  margin: 45px 0;

  .form-input {
    background: none;
    background-color: white;
    color: ${({ theme }) => theme.black};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${({ theme }) => theme.black};
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      ${({ theme }) => theme.shrinkLabel()}
    }
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: ${({ theme }) => theme.black};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      ${({ theme }) => theme.shrinkLabel()}
    }
  }
`;
