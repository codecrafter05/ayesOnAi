// //AyesOnAi/scr/components/PayPalButton.js
// import React, { useEffect } from "react";

// const PayPalButton = () => {
//   useEffect(() => {
//     // Initialize PayPal SDK with your client ID
//     window.paypal
//       .Buttons({
//         createOrder: (data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: "100.00", // Replace with your product's price
//                   currency_code: "USD",
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: async (data, actions) => {
//           const order = await actions.order.capture();
//           console.log("Transaction completed:", order);
//           // Handle the transaction completion here (e.g., show a thank you message)
//         },
//       })
//       .render("#paypal-button-container");
//   }, []);

//   return (
//     <div id="paypal-button-container">
//       {/* The PayPal buttons will be rendered here */}
//     </div>
//   );
// };

// export default PayPalButton;
