export default function Orders() {
  return (
    <section className="admin-page">
      <h2>Orders</h2>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1024</td>
              <td>Alice Johnson</td>
              <td>Shipped</td>
              <td>$120.00</td>
            </tr>
            <tr>
              <td>#1025</td>
              <td>Mark Lee</td>
              <td>Processing</td>
              <td>$89.90</td>
            </tr>
            <tr>
              <td>#1026</td>
              <td>Sophia Brown</td>
              <td>Delivered</td>
              <td>$210.50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
