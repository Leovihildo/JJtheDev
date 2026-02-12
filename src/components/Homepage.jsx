import React from 'react'

function Homepage() {
  return (
    <>
        <div className={`container`}>
            <div className={`row`}>
                <div className={`intro-text`}>
                    <p>Hello, my name is</p>
                    <h1 className={`header-text`}>JOSHUA JOHNSON</h1>
                    <p>Talented Web Frontend Engineer with over 5 years professional experience.</p>
                </div>
                <div>
                    <img src='./images/1.png' alt='profile-pic'/>
                </div>
                <div className={`socials-row`}>
                    <p>Github</p>
                    <p>X</p>
                    <p>LinkedIn</p>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Homepage