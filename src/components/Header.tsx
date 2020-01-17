import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoKeyboard as Logo } from "react-icons/go";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import { CartIcon } from "./CartIcon";

interface Props {
  currentUser: any;
}

const _Header: React.FC<Props> = ({ currentUser }) => (
  <StyledHeader>
    <Link className="logo-container" to="/">
      <Logo fontSize="50px" className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option hover-change" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/login">
          SIGN IN
        </Link>
      )}
      <Link to="/cart" className="option">
        <CartIcon />
      </Link>
    </div>
  </StyledHeader>
);

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser
});

export const Header = connect(mapStateToProps)(_Header);

const StyledHeader = styled("header")`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    display: flex;
    align-items: center;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
`;
