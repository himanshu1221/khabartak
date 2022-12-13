import React from 'react'
import Footer from './common/footer/Footer'
import Header from './common/header/Header'
import Discover from './home/discover/Discover'
import Hero from './home/hero/Hero'
import Home from './home/mainContent/homes/Home'

export const Homepages = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Home/>
        <Discover/>
        <Footer/>
    </>
  )
}
