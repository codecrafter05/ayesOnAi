import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
const [tab, setTab] = useState('monthly')
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'monthly' ? "active" : ""} onClick={()=>setTab('monthly')}>Monthly</li>
        <li className={tab === 'yearly' ? "active" : ""} onClick={()=>setTab('yearly')}>Yearly</li>
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Standard'
              price='29'
              currency='BD'
              timeline='monthly'
              features={['AI Vision', 'Voice Assistance', 'AI Monitoring', 'Customer Support']}
              btnText='Purchase Now'
              btnLink='/digital-agency'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='BD'
              timeline='yearly'
              features={['AI Vision', 'Voice Assistance', 'AI Monitoring', 'Customer Support']}
              btnText='Purchase Now'
              btnLink='/digital-agency'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
         {tab==='monthly' && (
            <PricingTable 
              title='Professional'
              price='199'
              currency='BD'
              timeline='monthly'
              features={['Advanced AI Vision', 'Enhanced Voice Assistance', 'Proactive AI Monitoring', 'Product Detector', 'Priority Customer Support']}
              btnText='Purchase Now'
              btnLink='/digital-agency'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Professional'
              price='399'
              currency='BD'
              timeline='yearly'
              features={['Advanced AI Vision', 'Enhanced Voice Assistance', 'Proactive AI Monitoring', 'Product Detector', 'Priority Customer Support']}
              btnText='Purchase Now'
              btnLink='/digital-agency'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Ultimate'
              price='299'
              currency='BD'
              timeline='monthly'
              features={['Premium AI Vision', 'Intelligent Voice Assistance', 'Adaptive AI Monitoring', 'Advanced Product Detector', 'VIP Customer Support', 'Data Privacy Assurance']}
              btnText='Purchase Now'
              btnLink='/digital-agency'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Ultimate'
              price='599'
              currency='BD'
              timeline='yearly'
              features={['Premium AI Vision', 'Intelligent Voice Assistance', 'Adaptive AI Monitoring', 'Advanced Product Detector', 'VIP Customer Support', 'Data Privacy Assurance']}
              btnText='Purchase Now'
              btnLink='/digital-agency'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
