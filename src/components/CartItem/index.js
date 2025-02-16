import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import './index.css'

const CartItem = props => {
  const {cartItem, removeCartItem, incrementQuantity, decrementQuantity} = props
  const {id, title, brand, quantity, price, imageUrl} = cartItem

  const onRemoveCartItem = () => removeCartItem(id)
  const incrementItem = () => incrementQuantity(id)
  const decrementItem = () => decrementQuantity(id)

  return (
    <li className="cart-item">
      <img className="cart-product-image" src={imageUrl} alt={title} />
      <div className="cart-item-details-container">
        <div className="cart-product-title-brand-container">
          <p className="cart-product-title">{title}</p>
          <p className="cart-product-brand">by {brand}</p>
        </div>
        <div className="cart-quantity-container">
          <button
            type="button"
            className="quantity-controller-button"
            onClick={decrementItem}
            data-testid="minus"
            aria-label="Decrease quantity"
          >
            <BsDashSquare color="#52606D" size={12} />
          </button>
          <p className="cart-quantity">{quantity}</p>
          <button
            type="button"
            className="quantity-controller-button"
            onClick={incrementItem}
            data-testid="plus"
            aria-label="Increase quantity"
          >
            <BsPlusSquare color="#52606D" size={12} />
          </button>
        </div>
        <div className="total-price-remove-container">
          <p className="cart-total-price">Rs {price * quantity}/-</p>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
            aria-label="Remove item"
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
