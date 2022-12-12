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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, necessitatibus.</p>
                    </div>
                    <div className="item">
                        <img src="../images/hero/hero1.jpg" alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, in.</p>
                    </div>
                </div>
                <div className="box">
                    <h3>LABELS</h3>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer