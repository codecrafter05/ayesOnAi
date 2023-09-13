import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function BlogPage() {
  pageTitle('Blog');
  const postData = [
    {
      thumb:'/images/post_4.jpeg',
      title:'A.I will take all human job within next year',
      subtitle:'The notion that AI will take all human jobs within the next year is an overstatement and not supported by current trends or expert opinion, the timeline for this kind of massive labor displacement is generally thought to be much longer.',
      date:'10 Sep 2023',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    },
    {
      thumb:'/images/ai.jpg',
      title:'Creative studio For AI Detection',
      subtitle:'The term "Injaz" developer to "Al-Watan": Out of "trust" we have committed ourselves to compensate the losers if we make a mistake" could refer to a variety of concepts depending on the context in which it',
      date:'11 Sep 2023',
      category:'AI Detection',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    },
    {
      thumb:'/images/bi.jpg',
      title:'Artistic mind will be great for creation',
      subtitle:'Absolutely, an artistic mind brings a unique perspective to any creation, be it traditional art, design, or even technological innovations like AI. The blend of art and technology, often referred to as "ArtTech," is a growing field where artistic creativity meets computational power.',
      date:'12 Sep 2023',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <PageHeading 
        title='Our Blog'
        bgSrc='/images/blog_hero_bg.jpeg'
        pageLinkText='Blog'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index)=> (
              <Div key={index}>
                <PostStyle2 
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {postData.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
            <Spacing lg='60' md='40'/>
            <Pagination/>
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg='0' md='80'/>
            <Sidebar/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      {/* <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div> */}
    </>
  )
}
