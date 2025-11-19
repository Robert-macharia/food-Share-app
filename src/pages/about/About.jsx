import React from 'react'
import Hero from './aboutSections/Hero'
import Purpose from './aboutSections/Purpose'
import Story from './aboutSections/Story'
import CoreValues from './aboutSections/CoreValues'
import Team from './aboutSections/Team'
import CTA from './aboutSections/CTA'
import data from './mockdata'

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Hero {...data.hero} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Purpose {...data.purpose} />
        <Story events={data.story} />
        <CoreValues items={data.coreValues} />
        <Team members={data.team} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
        <CTA />
      </div>
    </div>
  )
}

export default About
