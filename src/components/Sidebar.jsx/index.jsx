import React from 'react'
import Div from '../Div'
import AuthorWidget from '../Widget/AuthorWidget'
import RecentPost from '../Widget/RecentPost'
import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from '../Widget/SideMenuWidget'
import TagWidget from '../Widget/TagWidget'

export default function Sidebar() {
  const tagData = [
    {
      title: 'Business',
      url:'/'
    },
    {
      title: 'Agency',
      url:'/'
    },
    {
      title: 'AI Vision',
      url:'/'
    },
    {
      title: 'AI Monitoring',
      url:'/'
    },
    {
      title: 'Voice Assistance',
      url:'/'
    },
    {
      title: 'Crypto Curency',
      url:'/'
    },
    {
      title: 'User Experience',
      url:'/'
    },
  ]
  const archiveData = [
    {
     
    }
  ]
  const categoryData = [
    {
      title: 'AI Vision',
      url:'/'
    },
    {
      title: 'AI Monitoring',
      url:'/'
    },
    {
      title: 'Voice Assistance',
      url:'/'
    },
    {
      title: 'Crypto Curency',
      url:'/'
    },
    {
      title: 'Items Detection',
      url:'/'
    }
  ]
  const recentPostData = [
    {
      title: 'How to studio setup...',
      thumb: '/images/ai.jpg',
      href: '/blog/blog-details',
      date: '10 Sep 2023'
    },
    {
      title: 'Creative people mind...',
      thumb: '/images/recent_post_2.jpeg',
      href: '/blog/blog-details',
      date: '11 Sep 2023'
    },
    {
      title: 'AI take over human...',
      thumb: '/images/recent_post_3.jpeg',
      href: '/blog/blog-details',
      date: '12 Sep 2023'
    },
    {
      title: 'You should now add...',
      thumb: '/images/recent_post_4.jpeg',
      href: '/blog/blog-details',
      date: '10 Sep 2023'
    },
  ]
  return (
    <>
      <Div className="cs-sidebar_item">
        <AuthorWidget 
          src='/images/member_1.jpeg'
          name='Rashid Althawadi' 
          description='Rashid Althawadi The owner of Iijaz Token Bahrain which is started on 26/11/2021'
        />
      </Div>
      <Div className="cs-sidebar_item">
        <SearchWidget title='Search'/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Categories' data={categoryData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <RecentPost title='Archives' data={recentPostData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Archives' data={archiveData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <TagWidget title='Tags' data={tagData}/>
      </Div>
    </>
  )
}
