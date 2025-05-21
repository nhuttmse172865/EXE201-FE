import React from 'react'
import HeadSection from './head-section/HeadSection'
import ServiceSection from './service-section/ServiceSection'

const Body = () => {
  return (
    <div className=' min-h-[calc(100vh-200px)]'>
      <HeadSection />
      <ServiceSection />
    </div>
  )
}

export default Body