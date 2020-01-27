import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

interface Props {
  price: number;
}

export const StripeCheckoutButton: React.FC<Props> = ({ price }) => {
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
        alert("Payment Successful");
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
