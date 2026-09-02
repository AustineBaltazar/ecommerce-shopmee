export default function Payments() {
  return (
    <section className="admin-page">
      <h2>Payments</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Paid Orders</span>
          <strong>1,420</strong>
        </div>
        <div className="stat-card">
          <span>Refunds</span>
          <strong>$1.1K</strong>
        </div>
        <div className="stat-card">
          <span>Pending</span>
          <strong>36</strong>
        </div>
      </div>
    </section>
  )
}
