import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: 'What is EYES on AI',
      answer: 'EYES on AI is a technology solution designed to assist blind and visually impaired individuals. It integrates AI Vision, AI Monitoring, Voice Assistance powered by Google PaLM, and a Product Detector to provide a comprehensive, user-friendly experience.'
    },
    {
      question: 'What are the different service levels you offer?',
      answer: 'We offer three tiers of service: Standard, Professional, and Ultimate. Each tier provides a different set of features and capabilities designed to meet varied user needs. For more details, please refer to our "Our Service Levels" section.'
    },
    {
      question: 'How do I upgrade my service level?',
      answer: 'You can upgrade your service level through the EYES on AI application or by contacting our customer support team.'
    },
    {
      question: 'Is EYES on AI compatible with my device?',
      answer: 'EYES on AI is designed to be compatible with a wide range of smartphones and smart glasses. For specific device compatibility, please contact our support team.'
    },
    {
      question: 'How does the Voice Assistance feature work?',
      answer: 'Our Voice Assistance uses Google PaLM for natural language understanding. You can ask questions, receive directions, and interact with your environment through simple voice commands.'
    },
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}
