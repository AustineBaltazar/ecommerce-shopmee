import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import AdminLayout from './components/AdminLayout.jsx'
import Home from './pages/Frontend/Home.jsx'
import About from './pages/Frontend/About.jsx'
import Shop from './pages/Frontend/Shop.jsx'
import Cart from './pages/Frontend/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Login from './pages/User/Login.jsx'
import Register from './pages/User/Register.jsx'
import Dashboard from './pages/Admin/Dashboard.jsx'
import Orders from './pages/Admin/Orders.jsx'
import Customers from './pages/Admin/Customers.jsx'
import Reports from './pages/Admin/Reports.jsx'
import Payments from './pages/Admin/Payments.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="reports" element={<Reports />} />
            <Route path="payments" element={<Payments />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
