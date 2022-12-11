import React from "react"
import "./style.css"
import Popular from "../popular/Popular"
import Ppost from "../Ppost/Ppost"
import Life from "../life/Life"
import Music from "../music/Music"

const Home = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
            <Popular/>
            <Life/>
            <Ppost/>
            <Music/>
            </section>
          <section className='sideContent'></section>
        </div>
      </main>
    </>
  )
}

export default Home