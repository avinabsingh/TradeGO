import React from 'react'

const Education = () => {
  return (
    <div className="container p-4 my-4">
      <div className="row p-4 mx-3 my-5">
        <div className="col-5">
            <img src='media/images/education.svg'/>
        </div>
        <div className="col-1"></div>
        <div className="col-6">

          <h1 className='mb-5 fs-3'>Free and open market education</h1>
<p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

<a href="#" style={{textDecoration:"none"}} className='mb-4 d-block'>Varsity<i class="fa-solid fa-angle-right"></i></a>

<p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

<a href="#" style={{textDecoration:"none"}}>TradingQ&A<i class="fa-solid fa-angle-right"></i></a>
        </div>
        
      </div>
    </div>
  )
}

export default Education
