import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function Cart() {
  const { cart, removeFromCart } = useCart()
  const total = cart.reduce((sum, product) => sum + product.price, 0)

  return (
    <section className="page-section">
      <div className="container">
        <h1>Your Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/shop" className="shop-link">Continue shopping</Link>
          </div>
        ) : (
          <div className="cart-page">
            <div className="cart-items">
              {cart.map((product, index) => (
                <article className="cart-item" key={`${product.id}-${index}`}>
                  <div>
                    <h2>{product.name}</h2>
                    <p>${product.price.toFixed(2)}</p>
                  </div>
                  <button type="button" onClick={() => removeFromCart(product.id)}>
                    Remove
                  </button>
                </article>
              ))}
            </div>
            <strong className="cart-total">Total: ${total.toFixed(2)}</strong>
          </div>
        )}
      </div>
    </section>
  )
}
