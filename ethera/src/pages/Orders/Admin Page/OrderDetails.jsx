import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Product/AdminPage/Product.css"

export default function ShowOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5001/orders/get"
      );

      setOrders(res.data);
    } catch (error) {
      console.error("Error fetching orders", error);
    }
  };

  return (
    <div className="product-page">

      <div className="intro-section">
        <h1>Order Management</h1>

        <p>
          View and monitor all customer orders,
          order quantities, amounts, and status.
        </p>
      </div>

      <div className="product-list-section">
        <h2>Existing Orders</h2>

        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.customerName}</td>
                  <td>{order.productName}</td>
                  <td>{order.quantity}</td>
                  <td>₹{order.totalAmount}</td>
                  <td>{order.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">
                  No Orders Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}