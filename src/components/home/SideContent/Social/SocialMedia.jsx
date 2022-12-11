import React from 'react'
import '../Side/side.css'

const SocialMedia = () => {
  return (
    <>
        <section className="social">
            <div className="socBox">
                <i className='fab fa-facebook-f'></i>
                <span>40,765 Likes</span>
            </div>
            <div className="socBox">
                <i className='fab fa-pinterest'></i>
                <span>4567 Fans</span>
            </div>
            <div className="socBox">
                <i className='fab fa-twitter'></i>
                <span>500 Followers</span>
            </div>
            <div className="socBox">
                <i className='fab fa-instagram'></i>
                <span>22,345 Followers</span>
            </div>
            <div className="socBox">
                <i className='fab fa-youtube'></i>
                <span>12,542 Subscriber</span>
            </div>
        </section>
    </>
  )
}

export default SocialMedia