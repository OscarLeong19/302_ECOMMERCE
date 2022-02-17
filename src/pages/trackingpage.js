import React from 'react';
import '../styles/tracking.css';
import { Link } from "react-router-dom";

function trackingpage() {
  return (
    <div className='trackingContainer'>
        <div>
            <div className='detailleft'>
                Details of your order.
            </div>
            <div className='right'>
                <div className='detailright1'>
                    Order Number:
                </div>
                <div className='detailright2'>
                    Order Placed:
                </div>
            </div>
        </div>
        <div className='state'>
            <div className='img'> ..img.. </div>
            <div className='statebar'>
                <p>'Products name'</p>
                <h3>Arrives at  (time) </h3>
                <p1>Here's the shipment below</p1>
                <div>
                    <div>
                        -----------------------------------------------(change the max width in css)
                    </div>
                    <div>
                        <p2>Your items is on the way. Please keep in touch for the tracking informations.</p2>
                    </div>
                 </div>
            </div>
        </div>
        <div className='back'>
            <h4> Finished Checking </h4>
            <Link to="/">
                <button className='button-27'>Go Back</button>
            </Link>
        </div>
    </div>
  )
}

export default trackingpage