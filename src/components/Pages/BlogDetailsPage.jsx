import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function BlogDetailsPage() {
  const params = useParams()
  pageTitle('Blog Details');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    {/* Start Page Heading Section */}
      <PageHeading 
        title='Blog Single'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText={params.blogDetailsId}
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">

            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <img src="/images/ai.jpg" alt="Post" className="w-100 cs-radius_15" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">11 Sep 2023</span>
                  <Link to="/blog" className="cs-post_avatar">Tech</Link>
                </Div>
                <h2 className="cs-post_title">Injaz" developer to "Al-Watan": Out of "trust" we have committed ourselves to compensate the losers if we make a mistake</h2>
                <p>The term "Injaz" developer to "Al-Watan": Out of "trust" we have committed ourselves to compensate the losers if we make a mistake" could refer to a variety of concepts depending on the context in which it.</p>
                <blockquote className="cs-primary_font">
                The developer of the “Enjaz” currency, Rashid Al-Thawadi, said that, to understand what happened with the “Enjaz” digital currency, we must mention the facts and events that we witnessed during two hours of trading, as trading on the “Enjaz” currency began with very great momentum, and this is evidence of the strong success of the “Enjaz” currency.”.
                  <small>Rashid AlThawadi</small>
                </blockquote>
                <p>On the other hand, Al-Thawadi added in a special statement to Al-Watan: “In just the first two hours, more than $22 million was pumped into the currency, and the number of traders was very large, which led to a technical glitch in the platform due to the huge purchase requests. We were in constant contact with the platform.” We took a decision together to temporarily close trading on the currency “until the technical defect is fixed and the negatives are identified and avoided, if any, when the currency is launched again in the near future,” stressing that he and the developers of the “Enjaz” currency have contacted the platform to find a solution to the problem that occurred, as they asked them to send the data of all traders. , which is known to everyone by virtue of blockchain technology, and the platform promised us to find a solution to the issue.



He stated that the platform told the developers that the technical glitch that occurred was due to the great momentum on the currency, tremendous pressure, and lack of experience on the part of some traders, as they did not set the buying and selling price on the platform by clicking on the “limit” option, but instead they By issuing a purchase order by clicking on the purchase option “market”, which led to them buying the currency at high prices (market price). This is the mistake that some traders made and led to their loss unfortunately, knowing that the maximum “limit” is chosen to determine and fix the purchase price. And selling.

He continued, saying: “For our part, in order to build trust with the public, we will compensate everyone who purchased at the market price and we will give them the equivalent of what they paid in Enjaz currency. This is an initiative from us to build trust, in the event that it is proven that the error was on our part.” .

Regarding the time of announcing compensation and clarifications to the public, Al-Thawadi said, “The platform is now on vacation as is known, and will resume work on Monday, and we will inform the public of developments,” adding: “We receive people’s complaints and the proof they have, and we will compensate everyone in a way that satisfies them, in the event that the "The mistake is on our part."

Regarding whether the developers made any profits from the process, Al-Thawadi said: “The developers of the currency did not make a single penny. Our wallets are public and anyone can track any money in the blockchain world. There is nothing to hide and we have not received a single penny.”

Al-Thawadi pointed out that just as some people suffered losses, on the other hand, many traders achieved high profits, and this is the case in the stock market and electronic currencies. He expects that demands for the Enjaz currency will continue and increase when it is introduced again in the market because in the first hours its value equaled the value of ancient and international currencies. ..</p>
                <Div className="row">
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_1.jpeg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_2.jpeg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                </Div>
                <h3>Art is powerful and imaginary source</h3>
                <p>The developer of the “Enjaz” currency, Rashid Al-Thawadi, said that, to understand what happened with the “Enjaz” digital currency, we must mention the facts and events that we witnessed during two hours of trading, as trading on the “Enjaz” currency began with very great momentum, and this is evidence of the strong success of the “Enjaz” currency.”.</p>
                <p>Al-Thawadi added in a special statement to Al-Watan: “In just the first two hours, more than $22 million was pumped into the currency, and the number of traders was very large, which led to a technical glitch in the platform due to the huge purchase requests. We were in constant contact with the platform.” We took a decision together to temporarily close trading on the currency “until the technical defect is fixed and the negatives are identified and avoided, if any, when the currency is launched again in the near future,” stressing that he and the developers of the “Enjaz” currency have contacted the platform to find a solution to the problem that occurred, as they asked them to send the data of all traders. , which is known to everyone by virtue of blockchain technology, and the platform promised us to find a solution to the issue..</p>
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            <Spacing lg='30' md='30'/>
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg='5' md='5'/>
            <p className="cs-m0">Your email address will not be published. Required fields are marked *</p>
            <Spacing lg='40' md='30'/>
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />               
                </button>
              </Div>
            </form>
            {/* End Comment Section */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg='0' md='80'/>
            <Sidebar />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
      {/* End CTA Section */}
    </>
  )
}
