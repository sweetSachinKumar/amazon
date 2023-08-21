import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import bg from './bg-3.jpg' 
import CheckoutProduct from './CheckoutProduct'
const Checkout = () => {
    const [{basket}] = useStateValue()
  return (
    <div className='checkout'>
      <img className='checkout__add' src={bg} alt='not' />
       
      {basket?.length === 0 ?  (
        <div> 
            <h2>your Shopping Basket is empty</h2>
            </div>
      ) :
      (<>
        <h2>Your Shopping Basket</h2>
        {/* list out all of the checkout product  */}

        {
            basket?.map(item => < CheckoutProduct
                id= {item.id}
                title = {item.title}
                image = {item.image}
                price = { item.price}
                rating = {item.rating}

                />    )
        }
            </>

      )
      
      }
    </div>
  )
}

export default Checkout
