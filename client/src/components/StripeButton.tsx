import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { clearCart } from "../redux/cart/cartActions";
import { Dispatch } from "redux";
import { connect } from "react-redux";
interface Props {
  price: number;
  history: any;
  clearCart: () => void;
}

const _StripeCheckoutButton: React.FC<Props> = ({
  price,
  history,
  clearCart
}) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_F15gVMCjL0zcALGykvIC9HXi00sB0BMkiX";

  const onToken = (token: any): void => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        console.log(response);
        clearCart();
        history.push("/thank-you");
      })
      .catch(error => {
        console.log("Payment error: ", error);
        alert("There was an issue with your payment");
      });
  };

  return (
    <StripeCheckout
      amount={priceForStripe}
      panelLabel="Pay Now"
      label="Pay Now"
      name="Keeb Kraze"
      billingAddress
      shippingAddress
      image="/favicon.png"
      description={`Your total is $${price}`}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearCart: () => dispatch(clearCart())
});

// @ts-ignore
export const StripeCheckoutButton = withRouter(
  // @ts-ignore
  connect(null, mapDispatchToProps)(_StripeCheckoutButton)
);
