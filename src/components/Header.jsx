import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/shop', label: 'Shop' },
]

export default function Header() {
  const { cart } = useCart()

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand">
          ShopMee
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Log in
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Register
          </NavLink>
        </nav>

        <div className="cart-menu">
          <button type="button" className="cart-link" aria-label={`Cart with ${cart.length} items`}>
            Cart ({cart.length})
          </button>
          <div className="cart-preview">
            <strong>Cart preview</strong>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {cart.slice(-3).map((product, index) => (
                  <p key={`${product.id}-${index}`}>
                    {product.name} - ${product.price.toFixed(2)}
                  </p>
                ))}
                {cart.length > 3 && <p>+ {cart.length - 3} more item(s)</p>}
              </>
            )}
            <Link to="/cart" className="preview-link">View cart</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
