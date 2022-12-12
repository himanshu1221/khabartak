import React from 'react'
import Footer from './common/footer/Footer'
import Discover from './home/discover/Discover'
import Hero from './home/hero/Hero'
import Home from './home/mainContent/homes/Home'

export const Homepages = () => {
  return (
    <>
        <Hero/>
        <Home/>
        <Discover/>
        <Footer/>
    </>
  )
}
