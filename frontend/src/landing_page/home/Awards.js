import React from 'react'

const Awards = () => {
  return (
    <div className='container mt-5 mb-5 p-5'>
      <div className="row p-2">
        <div className="col-6 p-2">
            <img src='media/images/largestBroker.svg' alt=""/>
        </div>
        <div className="col-6">
            <h1>Largest stock broker in India</h1>
            <p className='mt-4'>2+ million TradeGo clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>

            <div className="row mt-4 p-2">
              <div className="col-6">
                  <ul>
                    <li>Future and Options</li>
                    <li>Commodity and derivatives</li>
                    <li>Currency derivatives</li>
                  </ul>
              </div>
              <div className="col-6 p-2">
                  <ul>
                    <li>Stocks & IPOs</li>
                    <li>Direct mutual funds</li>
                    <li>Bonds and Government Security</li>
                  </ul>
              </div>
            </div>

            <img src='media/images/pressLogos.png' style={{width:"90%"}} className='mt-2' alt=""/>
        </div>

      </div>
    </div>
  )
}

export default Awards
