import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './singlepages.css'
import SinglepagesSlider from './singlepageslider/SinglepagesSlider'

const Singlepages = () => {
    const{id} = useParams(null)
    const [item,setItem]= useState(null)
  return (
    <>
    {item ?(
        <main>
            <SinglepagesSlider/>
            <div className="container">
                <section className="mainContent details">
                    <h1 className='title'>{item.title}</h1>
                </section>
            </div>
        </main>
    ):( <h1>not found</h1> )}
    </>
  )
}

export default Singlepages