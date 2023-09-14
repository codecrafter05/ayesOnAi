import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';

export default function TimelineSlider() {
  const timelineData = [
    [
      {
        year: '2030 in 2023',
        name: 'AI Vision',
        position: 'Vision of The Future',
        type: 'AI Vision',
      },
      {
        year: '2023',
        name: 'CSS awards design',
        position: 'Honorable mention',
        type: 'Desktop exelence',
      },
    ],
    [
      {
        year: '2030 presented',
        name: 'AI Monitoring',
        position: 'Motion',
        type: 'AI Monitoring',
      },
      {
        year: '2023',
        name: 'Voice Assistance',
        position: 'AI Voice',
        type: 'Smart Voice',
      },
    ],
    [
      {
        year: '2030 in 2023',
        name: 'AI Vision',
        position: 'Vision of The Future',
        type: 'AI Vision',
      },
      {
        year: '2023',
        name: 'Crypto Monitoring',
        position: 'Up To Date',
        type: 'Track Your Crypto',
      },
    ],
  ];

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-arrow_style3">
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Timeline columnData={item} />
        </Div>
      ))}
    </Slider>
  );
}
