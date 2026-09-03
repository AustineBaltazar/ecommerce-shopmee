import { useCart } from '../../context/CartContext'

const products = [
  { id: 1, name: 'Everyday Backpack', price: 49.99 },
  { id: 2, name: 'Classic Sneakers', price: 74.99 },
  { id: 3, name: 'Minimal Watch', price: 89.99 },
]

export default function Shop() {
  const { cart, addToCart } = useCart()

  return (
    <section className="page-section">
      <div className="container">
        <div className="shop-heading">
          <div>
            <h1>Shop</h1>
            <p>Browse featured products and discover what you need.</p>
          </div>
          <strong className="cart-count">Cart: {cart.length}</strong>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image" aria-hidden="true">
                {product.name.charAt(0)}
              </div>
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <button type="button" onClick={() => addToCart(product)}>
                Add to cart
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
