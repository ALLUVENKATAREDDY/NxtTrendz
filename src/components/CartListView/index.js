import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeCartItem, incrementQuantity, decrementQuantity} =
        value

      return (
        <ul className="cart-list">
          {cartList.length > 0 ? (
            cartList.map(eachCartItem => (
              <CartItem
                key={eachCartItem.id}
                cartItem={eachCartItem}
                removeCartItem={removeCartItem}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            ))
          ) : (
            <p className="empty-cart-message">Your cart is empty.</p>
          )}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
