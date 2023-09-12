// PricingTable/PayPalButton.js
import React, { useEffect, useRef } from "react";

const PayPalButton = ({ price, onSuccess }) => {
  // Don't forget to add onSuccess here
  const paypalRef = useRef();

  useEffect(() => {
    // Empty the DOM node before re-rendering the button
    if (paypalRef.current) {
      paypalRef.current.innerHTML = "";
    }

    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(() => {
            if (typeof onSuccess === "function") {
              onSuccess();
            }
          });
        },
      })
      .render(paypalRef.current);
  }, [price, onSuccess]); // Also include onSuccess in the dependency array

  return <div ref={paypalRef} />;
};

export default PayPalButton;
