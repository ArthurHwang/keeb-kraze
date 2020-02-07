import React, { ReactElement } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoKeyboard as Logo } from "react-icons/go";
import { connect, RootStateOrAny } from "react-redux";
import { CartIcon } from "./CartIcon";
import { CartDropdown } from "./CartDropdown";
import { toggleCart } from "../redux/cart/cartActions";
import { Dispatch } from "redux";
import { selectCartItemsCount } from "../redux/cart/cartSelectors";
import { signOutStart } from "../redux/user/userActions";

export interface User {
  id: string;
  createdAt: Date;
  displayName: string;
  email: string;
}
interface Props {
  currentUser: User;
  toggleCart: () => void;
  signOutStart: () => void;
  showCart: boolean;
  cartItems: any;
  itemCount: number;
}

const _Header: React.FC<Props> = ({
  currentUser,
  toggleCart,
  showCart,
  cartItems,
  itemCount,
  signOutStart
}): ReactElement => {
  return (
    <StyledHeader>
      <Link className="logo-container" to="/">
        <Logo fontSize="50px" className="logo" />
        <span className="brand-name">Keeb Kraze</span>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        {/* <Link to="/contact" className="option">
          CONTACT
        </Link> */}
        {currentUser ? (
          <div className="option hover-change" onClick={signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            SIGN IN
          </Link>
        )}
        <CartIcon handleClick={toggleCart} itemCount={itemCount} />
      </div>
      {/* 
      //@ts-ignore */}
      {showCart && <CartDropdown cartItems={cartItems} />}
    </StyledHeader>
  );
};

const mapStateToProps = ({ user, cart }: RootStateOrAny) => ({
  currentUser: user.currentUser,
  showCart: cart.showCart,
  cartItems: cart.cartItems,
  itemCount: selectCartItemsCount(cart)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
  signOutStart: () => dispatch(signOutStart())
});

export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header);

const StyledHeader = styled("header")`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  border-bottom: 1px solid #dbdbdb;

  @media (max-width: 500px) {
    padding: 0 5px;
  }

  .logo-container {
    display: flex;
    align-items: center;

    .brand-name {
      margin-left: 10px;
      color: ${({ theme }) => theme.black};
      text-shadow: 0 0 0 0.5 #1d242f;

      @media (max-width: 500px) {
        display: none;
      }
    }
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 500px) {
      width: 80%;
    }

    .option {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
`;
