import React from 'react'

const Pricing = () => {
  return (
    <div className="container p-4">
      <div className="row p-5 mx-4">
        <div className="col-4">
          <h1 className='mb-5'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

          <a href="#" style={{textDecoration:"none"}}>See Pricing<i class="fa-solid fa-angle-right"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col border p-4">
                <h1><i className="fa-solid fa-indian-rupee-sign"></i>0</h1>
                <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col border p-4 ">
                <h1><i className="fa-solid fa-indian-rupee-sign"></i>20</h1>
                <p>Intraday and FAQ</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
