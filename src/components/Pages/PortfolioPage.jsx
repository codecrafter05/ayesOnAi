import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
// import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';



export default function PortfolioPage() {
  pageTitle('Portfolio');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const portfolioData = [
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_4.jpeg',
      category: 'ui_ux_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_5.jpeg',
      category: 'logo_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_6.jpeg',
      category: 'web_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_7.jpeg',
      category: 'mobile_apps',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_8.jpeg',
      category: 'ui_ux_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_9.jpeg',
      category: 'web_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_10.jpeg',
      category: 'logo_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_4.jpeg',
      category: 'ui_ux_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_5.jpeg',
      category: 'logo_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_6.jpeg',
      category: 'web_design',
    },
  ];
  const categoryMenu = [
    {
      title: 'Web Design',
      category: 'web_design',
    },
    {
      title: 'UI/UX Design',
      category: 'ui_ux_design',
    },
    {
      title: 'Mobile Apps',
      category: 'mobile_apps',
    },
    {
      title: 'Logo Design',
      category: 'logo_design',
    },
  ];

  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      {/* <Spacing lg="145" md="80" /> */}
      {/* <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div> */}
      {/* <div>
        <div class="container bootstrap snippets bootdey">
          <h1 class="text-primary">Edit Profile</h1>
          <hr />
          <div class="row">

            <div class="col-md-3">
              <div class="text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="avatar img-circle img-thumbnail" alt="avatar" />
                <h6>Upload a different photo...</h6>

                <input type="file" class="form-control" />
              </div>
            </div>
            <div class="col-md-9 personal-info">
              <div class="alert alert-info alert-dismissable">
          <a class="panel-close close" data-dismiss="alert">×</a> 
          <i class="fa fa-coffee"></i>
          This is an <strong>.alert</strong>. Use this to show important messages to the user.
        </div>
              <h3>Personal info</h3>

              <form class="form-horizontal" role="form">
                <div class="form-group">
                  <label class="col-lg-3 control-label">First name:</label>
                  <div class="col-lg-8">
                    <input class="form-control" type="text" value="dey-dey" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">Last name:</label>
                  <div class="col-lg-8">
                    <input class="form-control" type="text" value="bootdey" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">Company:</label>
                  <div class="col-lg-8">
                    <input class="form-control" type="text" value="" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">Email:</label>
                  <div class="col-lg-8">
                    <input class="form-control" type="text" value="janesemail@gmail.com" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-3 control-label">Time Zone:</label>
                  <div class="col-lg-8">
                    <div class="ui-select">
                      <select id="user_time_zone" class="form-control">
                        <option value="Hawaii">(GMT-10:00) Hawaii</option>
                        <option value="Alaska">(GMT-09:00) Alaska</option>
                        <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                        <option value="Arizona">(GMT-07:00) Arizona</option>
                        <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                        <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                        <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                        <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div> */}
      {/* jsakhfiuseghiuegh */}

      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in your mind?"
              subtitle="Getting Touch"
            />
            {/* <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" /> */}
          </Div>
          <Div className="col-lg-6">
            <form action="#" className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Contry*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Jender*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Jender*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Description*</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
              
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Cta
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
