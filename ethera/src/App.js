
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import ShowProduct from "./pages/Product/AdminPage/Products.jsx";
import AddProduct from "./pages/Product/Add/AddProduct.jsx";
import AddCustomer from "./pages/Customer/Add/AddCustomer.jsx";
import EditCustomer from "./pages/Customer/Edit/EditCustomer.jsx";
import ShowOrders from "./pages/Orders/Admin Page/OrderDetails.jsx";
import ProductList from "./pages/Product/View/ProductList.jsx";
import EditProduct from "./pages/Product/Edit/EditProduct.jsx";
import CustomerDashboard from "./pages/Customer/Admin Page/Customer.jsx";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<ShowProduct />} />
        <Route path="/products/add-product" element={<AddProduct />} />
        <Route path="/products/update/:name" element={<EditProduct />} />
         <Route path="/products/view" element={<ProductList />}/>
        <Route path="/customers" element={<CustomerDashboard />} />
        <Route path="/customers/add-customer" element={<AddCustomer />} />
        <Route path="/customers/edit-customer/:id" element={<EditCustomer />} />
        
        <Route path="/orders/get" element={<ShowOrders />} />
    </Routes>
    </BrowserRouter>



  );
}

export default App;