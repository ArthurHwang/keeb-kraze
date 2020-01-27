import React from "react";
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

const _Header: React.FC<Props> = ({
  currentUser,
  toggleCart,
  showCart,
  cartItems,
  itemCount,
  signOutStart
}) => {
  return (
    <StyledHeader>
      <Link className="logo-container" to="/">
        <Logo fontSize="50px" className="logo" />
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

export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header);
