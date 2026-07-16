
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
import CustomerList from "./pages/Customer/View/CustomerPage.jsx";
import Register from "./pages/Register/register.jsx";
import UserDashboard from "./pages/Dashboard/UserDashboard.jsx";
import { CodeDashboard } from "./pages/Dashboard/CodeDashboard.jsx";
import ProblemPage from "./pages/Code Editor/ProblemPage.jsx";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        {/* Products */}
        <Route path="/products" element={<ShowProduct />} />
        <Route path="/products/add-product" element={<AddProduct />} />
        <Route path="/products/update/:name" element={<EditProduct />} />
         <Route path="/products/view" element={<ProductList />}/>
         {/* customers */}
        <Route path="/customers" element={<CustomerDashboard />} />
        <Route path="/customers/add-customer" element={<AddCustomer />} />
        <Route path="/customers/view-customers" element={<CustomerList />} />
        <Route path="/customers/edit-customer/:id" element={<EditCustomer />} />        
        {/* Orders */}
        <Route path="/orders/view" element={<ShowOrders />} />
        {/* Coding platform addition */}
        <Route path="/codedashboard" element={<CodeDashboard/>}/>
        <Route path="/problems" element={<ProblemPage />} />
    </Routes>
    </BrowserRouter>



  );
}

export default App;