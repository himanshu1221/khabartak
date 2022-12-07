import React from 'react'
import { Link } from 'react-router-dom'
import Head  from './Head'
import './header.css'
import { useState } from 'react'


const Header = () => {
    const [navbar, setnavbar] = useState(false)

  return (
    <>
    <Head/>
    <header>
        <div className="container paddingSmall">
            <nav>
                <ul className={navbar ? "navbar" : "flex"} onClick={()=>setnavbar(false)}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/culture'>Culture</Link></li>
                    <li><Link to='/politics'>Politics</Link></li>
                    <li><Link to='/meme'>Meme</Link></li>
                    <li><Link to='/sports'>Sports</Link></li>
                    <li><Link to='/boxed'>Boxed</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                </ul>
                <button className='barIco' onClick={()=>setnavbar(!navbar)}>
                   { navbar ? <i className='fa fa-times'></i>:<i className='fa fa-bars'></i>}
                </button>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header;
