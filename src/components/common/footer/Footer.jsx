import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <div className="box logo">
                    <img src="../images/tech-logo-footer.png" alt="" />
                    <p>KhabarTak is one of the most active news website out there do siibscribe our newsletter and thanks for isiting the website</p>
                    <i className='fa fa-envelope'></i>
                    <span>KhabarTak@gmail.com</span>
                    <br />
                    <i className='fa fa-headphones'></i>
                    <span>+91 8765432156</span>
                </div>
                <div className="box">
                    <h3>SPORTS</h3>
                    <div className="item">
                        <img src="../images/hero/hero1.jpg" alt="" />
                        <p>Google To Boost Android Security In Few Days</p>
                    </div>
                    <div className="item">
                        <img src="../images/hero/hero2.jpg" alt="" />
                        <p>Cespedes Play The Winning Baseball Game</p>
                    </div>
                </div>
                <div className="box">
                <h3>CRICKET</h3>
                    <div className="item">
                        <img src="../images/hero/hero3.jpg" alt="" />
                        <p>us promises to  give intel id to locate soldiers</p>
                    </div>
                    <div className="item">
                        <img src="../images/hero/hero1.jpg" alt="" />
                        <p>Renewable energy dead as industry waits for  policy</p>
                    </div>
                </div>
                <div className="box">
                    <h3>LABELS</h3>
                    <ul>
                        <li><span>Boxing</span><label>(5)</label></li>
                        <li><span>Fashion</span><label>(6)</label></li>
                        <li><span>Health</span><label>(7)</label></li>
                        <li><span>Nature</span><label>(8)</label></li>
                    </ul>
                </div>
            </div>
        <div className="legal">
            <div className="container flexSB">
                <p>© all rights are reserved</p>
                <p>made with <i className='fa fa-heart'></i> by - Himanshu Chhatwal</p>
            </div>
        </div>
        </footer>
    </>
  )
}

export default Footer