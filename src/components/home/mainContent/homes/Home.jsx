import React from "react"
import "./style.css"
import Popular from "../popular/Popular"
import Ppost from "../Ppost/Ppost"
import Life from "../life/Life"

const Home = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
            <Popular/>
            <Life/>
            <Ppost/>
            </section>
          <section className='sideContent'></section>
        </div>
      </main>
    </>
  )
}

export default Home