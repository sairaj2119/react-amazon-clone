import React from 'react';
import '../css/CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../context/StateProvider';

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', id: id });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {!hideButton && (
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <StarIcon className="product__ratingStar" />
              ))}
          </div>
        )}

        {!hideButton && (
          <button onClick={removeFromCart}>remove from cart</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
