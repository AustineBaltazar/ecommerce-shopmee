import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/orders', label: 'Orders' },
  { to: '/admin/customers', label: 'Customers' },
  { to: '/admin/reports', label: 'Reports' },
  { to: '/admin/payments', label: 'Payments' },
]

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-brand">ShopMee Admin</div>

      <nav className="admin-nav" aria-label="Admin navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
