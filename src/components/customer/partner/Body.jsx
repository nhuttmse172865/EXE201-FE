import React from 'react'
import HeadSection from './head-section/HeadSection'
import OfferSection from './offers-section/OfferSection'
import OnboardingProcess from './onboarding-process/OnboardingProcess'
import FAQ from './FAQ/FAQ'

const Body = () => {
  return (
    <div>
        <HeadSection />
        <OfferSection />
        <OnboardingProcess />
        <FAQ />
    </div>
  )
}

export default Body