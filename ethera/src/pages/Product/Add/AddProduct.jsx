import { useState } from "react";
import axios from "axios";
import "./AddProduct.css";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    price: "",
    quantityInStock: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const REACT_APP_BASE_URL=process.env.REACT_APP_BASE_URL
      
      const token = localStorage.getItem("token");
      await axios.post(
        `${REACT_APP_BASE_URL}/products/add-product`,
        formData,
        {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
      );

      alert("Product Added Successfully!");

      setFormData({
        name: "",
        sku: "",
        price: "",
        quantity: ""
      });

    } catch (error) {
      alert("Failed to add product");
      console.log(error);
    }
  };

  return (
    <div className="add-product-page">

      <div className="form-container">

        <div className="form-header">
          <h1>Add New Product</h1>
          <p>
            Grow your inventory and manage
            your products efficiently 
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="product-form"
        >

          <label>Product Name</label>
          <input
            type="text"
            placeholder="Enter Product Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value
              })
            }
          />

          <label>SKU Code</label>
          <input
            type="text"
            placeholder="Enter SKU"
            value={formData.sku}
            onChange={(e) =>
              setFormData({
                ...formData,
                sku: e.target.value
              })
            }
          />

          <label>Price (₹)</label>
          <input
            type="number"
            placeholder="Enter Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({
                ...formData,
                price: e.target.value
              })
            }
          />

          <label>Quantity In Stock</label>
          <input
            type="number"
            placeholder="Available Quantity"
            value={formData.quantity}
            onChange={(e) =>
              setFormData({
                ...formData,
                quantityInStock: e.target.value
              })
            }
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Add Product
          </button>

        </form>

      </div>

    </div>
  );
}