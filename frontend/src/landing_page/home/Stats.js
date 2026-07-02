import React from 'react'

const Stats = () => {
  return (
    <div>
      <div className="container p-5">
        <div className="row p-5">
          <div className="col-6 mt-5 p-4">
            <h2 className='mb-5'>Trust with confidence</h2>
            <h3 className='mt-3'>Customer-first always</h3>
            <p>That's why 1.3+ crore customers trust TradeGo with ₹3.5+ lakh crores worth of equity investments.</p>

            <h3 className='mt-3'>No spam or gimmicks</h3>
            <p className='mt-3'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

            <h3 className='mt-3'>The TradeGo universe</h3>
            <p className='mt-3'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

            <h3 className='mt-3'>Do better with money</h3>
            <p className='mt-3'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
          <div className="col-6 mt-5 p-4">
            <img src='media/images/ecosystem.png' style={{width : "90%"}}/>
            <div className='text-center'>
              <a href="/" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-angle-right"></i></a>
              <a href="/" className='mx-4' style={{textDecoration:"none"}}  >Try Kite Demo </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
