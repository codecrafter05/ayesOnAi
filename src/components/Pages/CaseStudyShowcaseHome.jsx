//CaseStudyShowcaseHome.jsx
import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import LiveLocation from "../Hero/LiveLocation";
// import Spacing from "../Spacing";

export default function CaseStudyShowcaseHome({ speechRender }) {
  pageTitle("Case Study Showcase");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // console.log("Attempting Speech");
    // console.log(speechRender);
    if ("speechSynthesis" in window && speechRender != "") {
      console.log("About to speak");
      window.speechSynthesis.cancel();
      const synth = window.speechSynthesis;

      // Get the list of voices
      const voices = synth.getVoices();
      console.log(voices);

      // Find the female voice
      let femaleVoice = voices.find(
        (voice) => voice.name === "Google UK English Female"
      );

      // Mac Voice
      if (!femaleVoice) {
        femaleVoice = voices.find((voice) => voice.name === "Samantha");
      }

      // Create the SpeechSynthesisUtterance instance
      const utterance = new SpeechSynthesisUtterance(speechRender);

      if (femaleVoice) {
        // Use the female voice
        utterance.voice = femaleVoice;
      }

      // Speak the utterance
      synth.speak(utterance);
      console.log("Am I speaking:", synth.speaking);
    } else {
      console.log("The Web Speech API is not supported by this browser.");
    }
  }, [speechRender]);

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
      title: "AI Vision For Blinds <br />case study",
      imgUrl: "/images/slider_5.jpeg",
      href: "/case-study/case-study-details",
    },
    {
      title: "The Voice Assistance For Clients <br />case study",
      imgUrl: "/images/slider_6.jpeg",
      href: "/case-study/case-study-details",
    },
    {
      title: "The AI Monitoring <br />case study",
      imgUrl: "/images/slider_7.jpeg",
      href: "/case-study/case-study-details",
    },
    {
      title: "Crypto Monitoring <br />case study",
      imgUrl: "/images/slider_8.jpeg",
      href: "/case-study/case-study-details",
    },
    {
      title: "User Experience <br />case study",
      imgUrl: "/images/slider_9.jpeg",
      href: "/case-study/case-study-details",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto auto auto", // or "repeat(3, auto)" to be more concise
          width: "98%", // specify the width
          marginLeft: "auto", // center the element
          marginRight: "auto", // center the element
        }}
      ></div>
    </>
  );
}
