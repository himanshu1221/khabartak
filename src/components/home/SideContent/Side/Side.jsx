import React from 'react'
import Heading from '../../../Heading/Heading'
import SocialMedia from '../Social/SocialMedia'
import './side.css'

const Side = () => {
  return (
    <>
        <Heading title = "stay conneted"/>
        <SocialMedia/>
        <Heading title = "Subscribe"/>
          <section className='subscribe'>
          <h1 className='title'>Subscribe to our NewsLetter</h1>
          <form action="">
            <input type="email" placeholder='Email Address..' />
            <button>
              <i className='fa fa-paper-plane'></i> Submit
            </button>
          </form>
          </section>
    </>
  )
}

export default Side