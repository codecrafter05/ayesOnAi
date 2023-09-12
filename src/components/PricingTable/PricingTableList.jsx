//PricingTable/PricingTableList.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PricingTable from ".";
import Section from "../Div";
import Spacing from "../Spacing";
import PayPalButton from "./PayPalButton";

export default function PricingTableList() {
  const [tab, setTab] = useState("monthly");
  const navigate = useNavigate();

  const handleSuccess = () => {
    console.log("handleSuccess called");
    navigate("/digital-agency");
  };

  const pricingData = {
    monthly: [
      {
        title: "Standard",
        price: 29,
        currency: "$",
        features: [
          "AI Vision",
          "Voice Assistance",
          "AI Monitoring",
          "Customer Support",
        ],
      },
      {
        title: "Professional",
        price: "Coming soon",
        currency: "",
        features: [
          "Advanced AI Vision",
          "Enhanced Voice Assistance",
          "Proactive AI Monitoring",
          "Product Detector",
          "Priority Customer Support",
        ],
      },
      {
        title: "Ultimate",
        price: "Coming soon",
        currency: "",
        features: [
          "Premium AI Vision",
          "Intelligent Voice Assistance",
          "Adaptive AI Monitoring",
          "Advanced Product Detector",
          "VIP Customer Support",
          "Data Privacy Assurance",
        ],
      },
    ],
    yearly: [
      {
        title: "Standard",
        price: 290,
        currency: "$",
        features: [
          "AI Vision",
          "Voice Assistance",
          "AI Monitoring",
          "Customer Support",
        ],
      },
      {
        title: "Professional",
        price: "Coming soon",
        currency: "",
        features: [
          "Advanced AI Vision",
          "Enhanced Voice Assistance",
          "Proactive AI Monitoring",
          "Product Detector",
          "Priority Customer Support",
        ],
      },
      {
        title: "Ultimate",
        price: "Coming soon",
        currency: "",
        features: [
          "Premium AI Vision",
          "Intelligent Voice Assistance",
          "Adaptive AI Monitoring",
          "Advanced Product Detector",
          "VIP Customer Support",
          "Data Privacy Assurance",
        ],
      },
    ],
  };

  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li
          className={tab === "monthly" ? "active" : ""}
          onClick={() => setTab("monthly")}
        >
          Monthly
        </li>
        <li
          className={tab === "yearly" ? "active" : ""}
          onClick={() => setTab("yearly")}
        >
          Yearly
        </li>
      </ul>
      <Section className="row">
        {pricingData[tab].map((item, index) => (
          <Section className="col-lg-4" key={index}>
            <PricingTable
              title={item.title}
              price={item.price}
              currency={item.currency}
              timeline={tab}
              features={item.features}
            />
            <Spacing lg="25" md="25" />
            {item.title === "Standard" ? (
              <PayPalButton price={item.price} onSuccess={handleSuccess} />
            ) : (
              <div>Coming soon</div>
            )}
            <Spacing lg="25" md="25" />
          </Section>
        ))}
      </Section>
    </Section>
  );
}
