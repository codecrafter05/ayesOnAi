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
import LiveLocation from "./components/Hero/LiveLocation";
import Qchat from "./components/Hero/Qchat";
import Achat from "./components/Hero/Achat";
import PageHeading from "./components/PageHeading";

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
                    <PageHeading
                      title="MI AI"
                      bgSrc="images/team_hero_bg.jpeg"
                      pageLinkText="MI AI"
                    />
                    <Spacing lg="30" md="8" />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "98%",
                        height: "800px",
                        border: "2px solid #000", // border
                        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)", // shadow
                        // background: "#3C3C3C",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "105px",
                          width: "50%",
                          height: "100%",
                        }}
                      >
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
                        <Microphone
                          handleObjectDetection={handleObjectDetection}
                          lastFaceDetectionResultRef={
                            lastFaceDetectionResultRef
                          }
                          lastDetectedObject={objectInfo.name}
                          lastPersonCount={objectInfo.personNumber}
                        />

                        <CaseStudyShowcaseHome speechRender={speechRender} />
                      </div>
                      <div // New div for Qchat and Achat
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "80px",
                          width: "50%",
                          height: "80%",
                        }}
                      >
                        <Qchat />
                        <Spacing lg="100" md="80" />
                        <Achat transcript={speechRender} />
                      </div>
                    </div>
                    <Spacing lg="30" md="8" />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "98%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        border: "2px solid #000", // border
                        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)", // shadow
                      }}
                    >
                      <LiveLocation />
                    </div>
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
