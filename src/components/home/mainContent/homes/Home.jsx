import React from "react"
import "./style.css"
import Popular from "../popular/Popular"
import Ppost from "../Ppost/Ppost"

const Home = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
            <Popular/>
            <Ppost/>
            </section>
          <section className='sideContent'></section>
        </div>
      </main>
    </>
  )
}

export default Home