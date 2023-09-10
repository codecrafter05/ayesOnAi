//AyesOnAi/src/App.js
import { Route, Routes } from "react-router-dom";
import React, { useState, useRef } from "react";
import AboutPage from "./components/Pages/AboutPage";
import BlogPage from "./components/Pages/BlogPage";
import BlogDetailsPage from "./components/Pages/BlogDetailsPage";
import ContactPage from "./components/Pages/ContactPage";
import ErrorPage from "./components/Pages/ErrorPage";
import Home from "./components/Pages/Home";
import PortfolioDetailsPage from "./components/Pages/PortfolioDetailsPage";
import ServiceDetailsPage from "./components/Pages/ServiceDetailsPage";
import ServicesPage from "./components/Pages/ServicesPage";
import TeamPage from "./components/Pages/TeamPage";
import PortfolioPage from "./components/Pages/PortfolioPage";
import TeamDetails from "./components/Pages/TeamDetails";
import PhotographyAgencyHome from "./components/Pages/PhotographyAgencyHome";
import CreativePortfolioHome from "./components/Pages/CreativePortfolioHome";
import DigitalAgencyHome from "./components/Pages/DigitalAgencyHome";
import MarketingAgencyHome from "./components/Pages/MarketingAgencyHome";
import ShowcasePortfolioHome from "./components/Pages/ShowcasePortfolioHome";
import CaseStudyShowcaseHome from "./components/Pages/CaseStudyShowcaseHome";
import Layout from "./components/Layout";
import CaseStudyDetailsPage from "./components/Pages/CaseStudyDetailsPage";
import FaqPage from "./components/Pages/FaqPage";
import AuthPage from "./components/Pages/AuthPage/AuthPage";
import { getUser } from "../src/utilities/users-service";
import Hero7 from "./components/Hero/Hero7";
import Microphone from "./components/Hero/Microphone";
import { sendToBackend } from "./sendToBackend/api";

function App() {
  const [objectInfo, setObjectInfo] = useState({ name: "", personNumber: 0 });
  const [user, setUser] = useState(getUser());
  const lastFaceDetectionResultRef = useRef(null);

  const handleObjectDetection = (name, personNumber, transcript) => {
    setObjectInfo({ name, personNumber });
    if (transcript) {
      sendToBackend(name, personNumber, transcript);
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="photography-agency"
            element={<PhotographyAgencyHome />}
          />
          <Route path="digital-agency" element={<DigitalAgencyHome />} />
          <Route path="marketing-agency" element={<MarketingAgencyHome />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicesPage />} />
          <Route
            path="service/:serviceDetailsId"
            element={<ServiceDetailsPage />}
          />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route
            path="portfolio/:portfolioDetailsId"
            element={<PortfolioDetailsPage />}
          />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:blogDetailsId" element={<BlogDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team/:teamDetails" element={<TeamDetails />} />
          <Route
            path="/case-study/:caseStudyDetailsId"
            element={<CaseStudyDetailsPage />}
          />
          <Route path="faq" element={<FaqPage />} />
          <Route path="Auth" element={<AuthPage setUser={setUser} />} />
        </Route>
        <Route
          path="/"
          element={<Layout headerVariant="cs-site_header_full_width" />}
        >
          <Route
            path="creative-portfolio"
            element={<CreativePortfolioHome />}
          />
          <Route
            path="showcase-portfolio"
            element={<ShowcasePortfolioHome />}
          />
          <Route
            path="case-study-showcase"
            element={<CaseStudyShowcaseHome />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div className="camera-container">
        <Hero7
          handleObjectDetection={handleObjectDetection}
          lastFaceDetectionResultRef={lastFaceDetectionResultRef}
        />
      </div>
      <Microphone
        handleObjectDetection={handleObjectDetection}
        lastFaceDetectionResultRef={lastFaceDetectionResultRef}
      />
    </>
  );
}

export default App;
