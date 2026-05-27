// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const total = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )
      const itemsCount = cartList.length

      return (
        <div className="cart-summary-container">
          <h1 className="order-total">
            Order Total: <span className="total-value">Rs {total}/-</span>
          </h1>
          <p className="items-count">{itemsCount} items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary