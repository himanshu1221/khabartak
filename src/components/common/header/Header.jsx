import React from 'react'
import { Link } from 'react-router-dom'
import Head  from './Head'
import './header.css'



const Header = () => {
  return (
    <>
    <Head/>
    <header>
        <div className="container paddingSmall">
            <nav>
                <ul className='flex'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/culture'>Culture</Link></li>
                    <li><Link to='/politics'>Politics</Link></li>
                    <li><Link to='/meme'>Meme</Link></li>
                    <li><Link to='/sports'>Sports</Link></li>
                    <li><Link to='/boxed'>Boxed</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                </ul>
                <button className='barIco'>
                    <i className='fa fa-bars'></i>
                </button>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header;
