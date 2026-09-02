import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

export default function AdminLayout() {
  return (
    <div className="admin-shell">
      <header className="admin-header">
        <div className="admin-header-inner">
          <h1>Admin Panel</h1>
          <button type="button" className="admin-button">
            + New Product
          </button>
        </div>
      </header>

      <div className="admin-body">
        <AdminSidebar />

        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
