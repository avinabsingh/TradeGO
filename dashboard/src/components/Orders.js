import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {

  const [allOrders,setAllOrders] = useState([]);

  useEffect(()=>{
    axios.get(
  "http://localhost:8080/allOrders",
  {
    withCredentials: true,
  }
).then((res) => {
      setAllOrders(res.data);
    })
  },[])
  

  return (
    <div className="orders">
      <div className="no-orders">
        {allOrders.length === 0 ? <p>You haven't placed any orders today</p> : <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock,price) => {
            
            return(
              <tr>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
            


          })}

          
        </table>
      </div>

      
    </>}


        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
