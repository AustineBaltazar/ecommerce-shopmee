export default function Customers() {
  return (
    <section className="admin-page">
      <h2>Customers</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Customers</span>
          <strong>2,480</strong>
        </div>
        <div className="stat-card">
          <span>New This Month</span>
          <strong>194</strong>
        </div>
        <div className="stat-card">
          <span>Active Members</span>
          <strong>1,680</strong>
        </div>
      </div>
    </section>
  )
}
