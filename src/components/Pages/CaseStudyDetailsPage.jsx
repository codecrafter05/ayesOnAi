import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function CaseStudyDetailsPage() {
  pageTitle('Case Study Details');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Case Study Details"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Case Study Details"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="The Future of AI Will Be Strong"
          subtitle="The future of AI indeed looks promising, both in terms of technical advancements and its applications across various sectors"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <img
          src="/images/case_study_img_1.jpeg"
          alt="Thumb"
          className="w-100 cs-radius_15"
        />
        <Spacing lg="140" md="80" />
        <h2 className="cs-font_38 text-center">Case Study Overview</h2>
        <Spacing lg="60" md="45" />
        <p className="cs-m0">
        A case study overview on AI in the field of computer vision can shed light on the applications, challenges, and opportunities presented by these technologies. Computer vision is a subfield of artificial intelligence that focuses on enabling machines to interpret and understand the visual world.
        </p>
        <Spacing lg="65" md="45" />
        <Div className="row">
          <Div className="col-sm-6">
            <img
              src="/images/case_study_img_2.jpeg"
              alt="Thumb"
              className="w-100 cs-radius_5"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-sm-6">
            <img
              src="/images/case_study_img_3.jpeg"
              alt="Thumb"
              className="w-100 cs-radius_5"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
        <Spacing lg="125" md="55" />
      </Div>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_6">
        <Div className="cs-shape_2"></Div>
        <Div className="cs-shape_2"></Div>
        <Div className="container">
          <Spacing lg="145" md="80" />
          <h2 className="cs-font_38 text-center">Case Study Research</h2>
          <Spacing lg="90" md="45" />
          <Div className="row align-items-center cs-column_reverse_lg">
            <Div className="col-lg-5">
              <h3 className="cs-font_30 cs-m0">Voice Assistance</h3>
              <Spacing lg="45" md="30" />
              <p className="cs-m0">
              Voice assistants on computers, laptops, and mobile devices are increasingly becoming more integrated with camera functionalities. This offers a range of features and utilities that can be beneficial in both personal and professional settings.
              </p>
            </Div>
            <Div className="col-lg-6 offset-lg-1 text-center">
              <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                <img
                  src="/images/case_study_img_4.png"
                  alt="Case study"
                  className="w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
          </Div>
          <Spacing lg="100" md="80" />
          <Div className="row align-items-center">
            <Div className="col-lg-6 text-center">
              <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                <img
                  src="/images/case_study_img_5.png"
                  alt="Case study"
                  className="w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <h3 className="cs-font_30 cs-m0">AI Monitoring</h3>
              <Spacing lg="45" md="30" />
              <p className="cs-m0">
              AI monitoring refers to the use of artificial intelligence technologies to automatically observe, analyze, and act upon various types of data or activities within a given environment. AI monitoring can be applied in numerous sectors including healthcare, cybersecurity, industrial operations, and customer service, among others. <br />
                <br />
                AI monitoring refers to the use of artificial intelligence technologies to automatically observe, analyze, and act upon various types of data or activities within a given environment. AI monitoring can be applied in numerous sectors including healthcare, cybersecurity, industrial operations, and customer service, among others.
              </p>
            </Div>
          </Div>
          <Spacing lg="150" md="80" />
        </Div>
      </Div>
      <Spacing lg="140" md="80" />
      <Div className="container text-center">
        <Div className="row col-lg-10 offset-lg-1">
          <h2 className="cs-font_38 cs-m0">Result of The Case Study on ai</h2>
          <Spacing lg="60" md="45" />
          <p className="cs-m0">
          Efficiency: Perhaps the AI system reduced data processing time from hours to minutes, representing a 90% time savings.Accuracy: For instance, if the project was about medical diagnoses, maybe the AI achieved a diagnostic accuracy of 98%, surpassing human accuracy levels.User Experience: Feedback from users might indicate that the AI system is user-friendly and intuitive.
          </p>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
