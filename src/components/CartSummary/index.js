import {Component} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

class CartSummary extends Component {
  getTotalAmount = cartList => {
    let total = 0
    cartList.forEach(eachItem => {
      total += eachItem.price * eachItem.quantity
    })
    return total
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const total = this.getTotalAmount(cartList)
          const quantity = cartList.length
          return (
            <div className="CartSummaryContainer">
              <div className="orderTotalContainer">
                <h1 className="order-total-para">Order Total:</h1>
                <h1 className="totalHeading">Rs {total}</h1>
              </div>
              <div>
                <p>{quantity} items in cart</p>
              </div>
              <button type="button" className="checkoutButton">
                Checkout
              </button>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartSummary
