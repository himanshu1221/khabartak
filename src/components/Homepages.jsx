import React from 'react'
import Discover from './home/discover/Discover'
import Hero from './home/hero/Hero'
import Home from './home/mainContent/homes/Home'

export const Homepages = () => {
  return (
    <>
        <Hero/>
        <Home/>
        <Discover/>
    </>
  )
}
