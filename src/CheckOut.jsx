import React from 'react'
import "./CheckOut.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function CheckOut() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img 
          className='checkout__ad'
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
          alt="checkout__banner" 
        />

        <div className="checkout__title">
          <h2>Your shopping Basket</h2>
             {basket.map(item => (
              <CheckoutProduct
               id={item.id}
               title={ item.title}
               image={ item.image}
               price={ item.price}
               rating={item.rating}
              />
             ))}
           </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default CheckOut