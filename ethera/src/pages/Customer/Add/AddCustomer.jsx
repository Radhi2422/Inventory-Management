import { useState } from "react";
import axios from "axios";
import "../../Product/Add/AddProduct.css";

export default function AddCustomer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Address: "",
    ContactNumber: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const REACT_APP_BASE_URL=process.env.REACT_APP_BASE_URL
      
      const token = localStorage.getItem("token");
      await axios.post(
        `${REACT_APP_BASE_URL}/customers/add-customer`,
        formData,
        {
        headers: {
            Authorization: `Bearer ${token}`
        }}
      );

      alert("Customer Added Successfully!");

      setFormData({
        name: "",
        email: "",
        Address: "",
        ContactNumber: ""
      });

    } catch (error) {
      alert("Failed to add customer");
      console.log(error);
    }
  };

  return (
    <div className="add-product-page">

      <div className="form-container">

        <div className="form-header">
          <h1>Add New Customer</h1>
          <p>
            Store customer information and
            manage customer records efficiently.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="product-form"
        >

          <label>Customer Name</label>
          <input
            type="text"
            placeholder="Enter Customer Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value
              })
            }
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value
              })
            }
          />

          <label>Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            value={formData.Address}
            onChange={(e) =>
              setFormData({
                ...formData,
                Address: e.target.value
              })
            }
          />

          <label>Contact Number</label>
          <input
            type="number"
            placeholder="Enter Contact Number"
            value={formData.ContactNumber}
            onChange={(e) =>
              setFormData({
                ...formData,
                ContactNumber: e.target.value
              })
            }
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Add Customer
          </button>

        </form>

      </div>

    </div>
  );
}