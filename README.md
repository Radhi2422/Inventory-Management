# MERN Role-Based Dashboard Application

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** application featuring **JWT Authentication**, **Role-Based Access Control (RBAC)**, **database-driven permissions**, an **E-commerce Dashboard**, an **Admin Panel**, and a **Coding Platform**. The application provides different experiences based on the authenticated user's role.

---

# Features

## Authentication

- User Registration
- Secure Login
- JWT Authentication
- Password Encryption using bcrypt
- Protected API Routes
- Token-based Authorization

---

## Role-Based Access Control

The application supports three different user roles.

### 1. Admin

After successful login, an Admin is redirected to the **Admin Dashboard**.

Admin Features:

- Dashboard Overview
- Product Management
- Customer Management
- Order Management
- User Management
- Role Management
- Permission Management
- View System Statistics
- CRUD Operations
- Secure APIs

---

### 2. User

After login, a User is redirected to the **Shopping Dashboard**.

User Features:

- Browse Products
- Product Search
- View Product Details
- Add Products to Cart
- Place Orders
- View Previous Orders

---

### 3. Coder

After login, a Coder is redirected to the **Coding Platform**.

Current Features

- Role-based Login
- Separate Coding Dashboard
- Foundation for Online Judge

Upcoming Features

- Online Code Editor
- Run Code
- Submit Code
- Multiple Programming Languages
- Test Case Execution
- Coding Problems
- Leaderboard

---

# Security Features

- JWT Authentication
- Protected Routes
- Role Verification
- Permission Verification
- Password Hashing
- Environment Variables
- CORS Protection

---

# Database Driven Permissions

Permissions are stored inside MongoDB instead of hardcoded.

Example Flow

```
User
        │
        ▼
Role
        │
        ▼
Permissions
        │
        ▼
API Access
```

Example Permissions

- Create Product
- Edit Product
- Delete Product
- View Orders
- Manage Users
- Manage Roles
- Manage Permissions
- Create Customer

---

# Technology Stack

## Frontend

- React.js
- React Router
- Axios
- CSS

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- JWT
- bcrypt

---

# Folder Structure

```
project/

│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── Controllers/
│   ├── Models/
│   ├── Routes/
│   ├── Middleware/
│   ├── Config/
│   ├── Services/
│   └── server.js
│
├── README.md
└── package.json
```

---

# User Flow

```
                Login
                   │
          JWT Authentication
                   │
          Fetch User Role
                   │
        ┌──────────┼──────────┐
        │          │          │
     Admin       User      Coder
        │          │          │
        ▼          ▼          ▼
 Admin Dashboard  Shopping   Coding Platform
                  Dashboard
```

---

# API Modules

## Authentication

- Register
- Login
- JWT Verification

## Products

- Add Product
- Edit Product
- Delete Product
- View Products

## Customers

- Add Customer
- Update Customer
- Delete Customer
- View Customers

## Orders

- Create Order
- View Orders
- Update Order Status
- Delete Order

## Roles

- Create Role
- Update Role
- Delete Role
- View Roles

## Permissions

- Create Permission
- Assign Permission
- View Permissions

---

# Environment Variables

Backend

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

Frontend

```env
REACT_APP_BASE_URL=http://localhost:5000
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Backend

```bash
cd server

npm install

npm run dev
```

---

## Frontend

```bash
cd client

npm install

npm start
```

---

# Future Enhancements

## Coding Platform

- Online Monaco Code Editor
- Docker-based Code Execution
- Run Code API
- Submit Solution
- Multiple Languages
- Hidden Test Cases
- Time & Memory Limits
- Code Execution Sandbox
- Leaderboard
- Contest Module

---

## E-Commerce

- Shopping Cart Improvements
- Payment Gateway Integration
- Wishlist
- Product Reviews
- Order Tracking
- Invoice Generation

---

## Admin

- Analytics Dashboard
- Sales Reports
- Inventory Alerts
- Export Reports
- Activity Logs

---

# Learning Objectives

This project demonstrates practical implementation of:

- MERN Stack Development
- REST API Design
- JWT Authentication
- Role-Based Access Control (RBAC)
- Database-Driven Permissions
- MongoDB Relationships
- Protected Routes
- CRUD Operations
- State Management
- Secure Backend Development

---

# Project Status

| Module | Status |
|---------|--------|
| Authentication | ✅ Completed |
| JWT Authentication | ✅ Completed |
| Role-Based Routing | ✅ Completed |
| Permission Management | ✅ Completed |
| Product Module | ✅ Completed |
| Customer Module | ✅ Completed |
| Order Module | ✅ Completed |
| Admin Dashboard | ✅ Completed |
| Shopping Dashboard | ✅ Completed |
| Coding Platform UI | 🚧 In Progress |
| Online Code Editor | 🚧 In Progress |
| Docker Code Execution | 📅 Planned |
| Code Submission Engine | 📅 Planned |

---

# License

This project is intended for educational purposes and portfolio demonstration.
