import React from 'react'
import Heading from '../../../Heading/Heading'
import SocialMedia from '../Social/SocialMedia'
import Tpost from '../tpost/Tpost'
import './side.css'
import { gallery } from "../../../../dummyData"
import Slider from "react-slick";

const Side = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const category = ["world","travel","sports","fun","health","fashon","business","technology"]
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

          <section className="banner">
            <img src="./images/sidebar-banner-new.jpg" alt="" />
          </section>
          <Tpost/>
          <section className='catgeorys'>
            <Heading title='Catgeorys'/>
            {category.map((val)=>{
              return <div className="category category1">
                <span>{val}</span>
              </div>
            })}
          </section>

          <section className="gallery">
            <Heading title='gallery'/>
            <Slider {...settings}>
            {
              gallery.map((val)=>{
                return(
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                )
              })
            }
            </Slider>
          </section>
    </>
  )
}

export default Side