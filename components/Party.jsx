import React from 'react'
import zomato from "../utils/zomato.png";
import swiggy from "../utils/swiggy.png";

const Party = () => {
  return (
    <div className='party-wrapper'>
      <div className='party-box'>
        <h1>If You score more than 7,,,you deserve a party:)</h1>
        <div></div>
        <div className='order-online'>
          <button className='order-btn' ><a href="https://zomato.com"><img src={zomato}></img></a></button>
          <button className='order-btn' ><a href="https://swiggy.com"><img src={swiggy}></img></a></button>
        </div>
        
        <iframe className='map'
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d57968.654251130625!2d92.76724763352254!3d24.759787100000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20maps%20bishal!5e0!3m2!1sen!2sin!4v1724016073607!5m2!1sen!2sin" ></iframe>

      </div>
    </div>
  )
}

export default Party
