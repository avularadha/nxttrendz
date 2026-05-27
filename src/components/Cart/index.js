import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import Header from '../Header'
import CartItem from '../CartItem'
import CartSummary from '../CartSummary'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {
        cartList,
        removeAllCartItems,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
      } = value

      const showEmptyView = cartList.length === 0

      return (
        <>
          <Header />
          <div className="cart-container">
            <h1 className="cart-heading">My Cart</h1>

            {!showEmptyView && (
              <button
                type="button"
                className="remove-all-btn"
                onClick={removeAllCartItems}
              >
                Remove All
              </button>
            )}

            {showEmptyView ? (
              <div className="empty-cart-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                  alt="cart empty"
                  className="empty-cart-image"
                />
                <h1 className="empty-cart-heading">Your Cart Is Empty</h1>

                {/* ✅ Shop Now button */}
                <Link to="/products">
                  <button type="button" className="shop-now-btn">
                    Shop Now
                  </button>
                </Link>
              </div>
            ) : (
              <div className="cart-content">
                <ul className="cart-items-list">
                  {cartList.map(eachItem => (
                    <CartItem
                      key={eachItem.id}
                      cartItemDetails={eachItem}
                      incrementQuantity={incrementCartItemQuantity}
                      decrementQuantity={decrementCartItemQuantity}
                      removeItem={removeCartItem}
                    />
                  ))}
                </ul>
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart