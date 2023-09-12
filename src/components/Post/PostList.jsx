import React from 'react';

export default function PostList() {
  const postData = [
    {
      title: 'Who should have the authority to deploy advanced AI systems, and how will this be regulated?',
      postHref: '/blog/blog-details',
      subtitle:
        'The question of who should have the authority to deploy advanced AI systems and how they should be regulated is a multi-faceted issue that touches on ethics, law, and public policy. Different stakeholders will have varying perspectives...',
      authorName: 'Rashid AlThawadi',
      authorImg: '/images/speed.png',
      authorDesignation: 'Manama, Bahrain',
      date: '11',
      month: 'Sep',
      year: '2023',
    },
    {
      title: 'Will AI in healthcare be accessible to all, or only to those who can afford it?',
      postHref: '/blog/blog-details',
      subtitle:
        'High Costs: Advanced AI technologies can be expensive to develop and deploy, which may make it cost-prohibitive for some healthcare systems or individual patients...',
      authorName: 'Yusuf Hakeem',
      authorImg: '/images/speed2.png',
      authorDesignation: 'Manama, Bahrain',
      date: '11',
      month: 'Sep',
      year: '2023',
    },
    {
      title: 'What new kinds of jobs will AI create, and what skills will be required to fill them?',
      postHref: '/blog/blog-details',
      subtitle:
        'The rise of AI is expected to lead to the creation of new job categories...',
      authorName: 'Mustafa Qarooni',
      authorImg: '/images/speed3.png',
      authorDesignation: 'Manama, Bahrain',
      date: '10',
      month: 'Sep',
      year: '2023',
    },
  ];
  return (
    <ul className="cs-post_3_list cs-mp0">
      {postData.map((item, index) => (
        <li key={index}>
          <div className="cs-post cs-style3">
            <div className="cs-post_left">
              <div className="cs-posted_by">
                <span className="cs-primary_font">{item.date}</span>
                <span>
                  {item.month} <br />
                  {item.year}
                </span>
              </div>
            </div>
            <div className="cs-post_right">
              <h2 className="cs-post_title">
                <a href={item.postHref}>{item.title}</a>
              </h2>
              <div className="cs-post_subtitle">{item.subtitle}</div>
              <div className="cs-post_meta">
                <div className="cs-post_avatar">
                  <div className="cs-post_avatar_img">
                    <img src={item.authorImg} alt="Avatar" />
                  </div>
                  <div className="cs-post_avatar_info">
                    <h4>{item.authorName}</h4>
                    <p>{item.authorDesignation}</p>
                  </div>
                </div>
                <a href={item.postHref} className="cs-text_btn">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
