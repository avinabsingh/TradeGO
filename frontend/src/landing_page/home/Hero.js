import React from 'react'

const Hero = () => {
  return (
    <div className='container p-7 mb-5'>
      <div className="row text-center">
        <div className="col">
          <img src='media/images/homeHero.png' alt='h' className='mb-5' style={{width:"100%"}}/>
          <h1 className='mt-5'>Invest in everything</h1>
          <p>Online Platform to invest in stocks, derivates, mutual funds and more</p>
          <button style={{width:"20%", margin: "0 auto"}} className='p-2 btn btn-primary fs-5 mb-5'>Sign up</button>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
