import React from 'react'
import Header from '../sections/research/Header'
import Timeline from '../sections/research/Timeline'
import MainContent from '../sections/research/MainContent'
import CurrentProject from '../sections/research/CurrentProject'
import BehindScenes from '../sections/research/BehindScenes'
import CaseStudy from '../sections/prodctsService/CaseStudy'

export default function Research() {
  return (
    <>
      <Header />
      <Timeline />
      <MainContent/>
      <CurrentProject/>
      <BehindScenes/>
      <CaseStudy/>
    </>
  )
}
