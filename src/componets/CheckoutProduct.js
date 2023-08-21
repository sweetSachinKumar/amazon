import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
const CheckoutProduct = ({id, title, image,price,rating}) => {
 const [{basket}, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: "REMORE_FROM_BASKET",
            item: {
                id: id
               
            }
        })
    }

    // console.log(id, title, image,price,rating)

  return (
    <div className='checkoutproduct' key={id}>
      <img src={image} className="checkoutproduct__image"  alt='img' />
        <div className="checkoutproduct__info">
            <p className="checkoutproduct__title">{title}</p>
            <p className="checkoutproduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutproduct__rating">
            {
                    Array(rating).fill().map((_,i) => <p key={i}> &#11088;</p>)
                }
            </div>
            <button onClick={removeFromBasket} className='checkoutproduct__remove' >Remove from basket</button>

        </div>
    </div>
  )
}

export default CheckoutProduct
