import React from "react";
import StripeCheckout from "react-stripe-checkout";

interface Props {
  price: number;
}

export const StripeCheckoutButton: React.FC<Props> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_F15gVMCjL0zcALGykvIC9HXi00sB0BMkiX";

  const onToken = (token: any): void => {
    console.log(token);
    alert("Payment Successful");
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
