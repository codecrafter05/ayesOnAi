import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Hero7 from "../Hero/Hero7";
import Microphone from "../Hero/Microphone";

export default function CaseStudyShowcaseHome() {
  pageTitle("Case Study Showcase");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const heroSocialLinks = [
    {
      name: "Instagram",
      links: "https://www.instagram.com/iinjaz_token/?utm_medium=copy_link",
    },
    {
      name: "Twitter",
      links: "https://twitter.com/iinjaztoken?s=11&t=qQH6SLLfsZJGVtygIFx_Ng",
    },
  ];

  const showcaseData = [
    {
      title: "Uber food app <br />case study",
      imgUrl: "/images/slider_5.jpeg",
      href: "/case-study/case-study-details",
    },
    {
      title: "Uber food app <br />case study",
      imgUrl: "/images/slider_6.jpeg",
      href: "/case-study/case-study-details",
    },
    {
      title: "Uber food app <br />case study",
      imgUrl: "/images/slider_7.jpeg",
      href: "/case-study/case-study-details",
    },
    {
      title: "Uber food app <br />case study",
      imgUrl: "/images/slider_8.jpeg",
      href: "/case-study/case-study-details",
    },
    {
      title: "Uber food app <br />case study",
      imgUrl: "/images/slider_9.jpeg",
      href: "/case-study/case-study-details",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        <div className="camera-container">
          <Hero7
            heroSocialLinks={heroSocialLinks}
            socialLinksHeading="Follow Us"
            showcaseData={showcaseData}
          />
        </div>

        <Microphone />
      </div>
    </>
  );
}
