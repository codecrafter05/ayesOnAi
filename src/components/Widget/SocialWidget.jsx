import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';



export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link to='https://www.linkedin.com/in/althawadi7/' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link to='https://twitter.com/i/flow/login?redirect_after_login=%2Fiinjaztoken' className="cs-center">
        <Icon icon="fa6-brands:twitter" />               
      </Link>
      <Link to='https://www.youtube.com/watch?v=n-u5FNchaBs' className="cs-center">
        <Icon icon="fa6-brands:youtube" />              
      </Link>
      <Link to='https://app.slack.com/client/T03JBCX8WE7/C05BR9R2C5P/thread/C05BR9R2C5P-1694348563.348019' className="cs-center">
        <Icon icon="fa6-brands:slack" />
      </Link>
    </Div>
  )
}
