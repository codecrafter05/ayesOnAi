//AyesOnAi/src/App.js
import { Route, Routes } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
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
import Spacing from "./components/Spacing";

function App() {
  const [objectInfo, setObjectInfo] = useState({ name: "", personNumber: "" });
  const [isUpdated, setIsUpdated] = useState(false); // Add this line
  const [user, setUser] = useState(getUser());
  const lastFaceDetectionResultRef = useRef(null);
  const [speechRender, setSpeechRender] = useState("");

  const handleObjectDetection = async (name, personNumber, transcript) => {
    setObjectInfo((prevState) => ({
      name: name || prevState.name,
      personNumber: personNumber || prevState.personNumber,
    }));

    if (transcript) {
      try {
        const response = await sendToBackend(
          objectInfo.name,
          objectInfo.personNumber,
          transcript
        );
        // Handle the response from the backend here
        // You can update your state or perform any necessary actions
        console.log("Response from backend:", response);
        setSpeechRender(response.output);
        setIsUpdated(true); // Set isUpdated to trigger the update
      } catch (error) {
        // Handle error if the backend request fails
        console.error(`Failed to send data to the backend: ${error.message}`);
      }
    }
  };

  useEffect(() => {
    if (isUpdated) {
      const { name, personNumber } = objectInfo;
      // sendToBackend(name, personNumber)
      //   .then((response) => {
      //     // Handle the response from the backend if needed
      //     console.log("Response from backend:", response);
      //   })
      //   .catch((error) => {
      //     // Handle error if the backend request fails
      //     console.error(`Failed to send data to the backend: ${error.message}`);
      //   })
      //   .finally(() => {
      //     setIsUpdated(false);
      //   });
    }
  }, [isUpdated, objectInfo]);
  return (
    <>
      {user ? (
        <>
          <Routes>
            
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="photography-agency"
                element={<PhotographyAgencyHome />}
              />
              <Route path="digital-agency" element={<DigitalAgencyHome />} />
              <Route
                path="marketing-agency"
                element={<MarketingAgencyHome />}
              />
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
                element={
                  <>
                    <Spacing lg="160" md="80" />
                    <Spacing lg="160" md="80" />
                    <div className="camera-container">
                      <Hero7
                        onObjectDetection={(objectName) =>
                          handleObjectDetection(
                            objectName,
                            objectInfo.personNumber
                          )
                        }
                        onPersonDetection={(personNumber) =>
                          handleObjectDetection(objectInfo.name, personNumber)
                        }
                      />
                    </div>
                    <Microphone
                      handleObjectDetection={handleObjectDetection}
                      lastFaceDetectionResultRef={lastFaceDetectionResultRef}
                      lastDetectedObject={objectInfo.name}
                      lastPersonCount={objectInfo.personNumber}
                    />
                    <CaseStudyShowcaseHome speechRender={speechRender} />
                  </>
                }
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </>
  );
}

export default App;
