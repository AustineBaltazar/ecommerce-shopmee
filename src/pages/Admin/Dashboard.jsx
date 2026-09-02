export default function Dashboard() {
  return (
    <section className="admin-page">
      <h2>Dashboard</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Sales</span>
          <strong>$18,420</strong>
        </div>
        <div className="stat-card">
          <span>Orders</span>
          <strong>324</strong>
        </div>
        <div className="stat-card">
          <span>Customers</span>
          <strong>1,205</strong>
        </div>
        <div className="stat-card">
          <span>Returns</span>
          <strong>12</strong>
        </div>
      </div>
    </section>
  )
}
