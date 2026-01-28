# 🛒 React E-Commerce SPA

A modern **Single Page Application (SPA)** built using **React + Vite** that simulates a real-world e-commerce platform experience.  
This project includes authentication, protected routes, cart management, and a complete shopping flow similar to Amazon/Flipkart.

---

## 🚀 Features

### 🔐 Authentication
- Login  
- Signup  
- Logout  
- LocalStorage persistence  
- Protected routes  
- Auto redirect after login  

### 🛍 Products
- Product listing from external API  
- Search functionality  
- Product detail page  
- Quantity selector (0–99)  

### 🛒 Cart System
- Auto cart update  
- Navbar cart count  
- Cart page with product tiles  
- Image, title, price, quantity  
- Total calculation  
- Place order button  
- Order success message  
- Auto redirect after order  

### 🧭 Routing
- React Router DOM  
- Protected routes  
- Default login page  
- Auth-based navigation flow  

---

## 🧱 Tech Stack

- React  
- Vite  
- React Router DOM  
- Context API  
- JavaScript (ES6+)  
- CSS3  
- LocalStorage  

---

## 📂 Project Structure

```
src/
│
├── api/
│ └── api.js
│
├── components/
│ ├── Navbar.jsx
│ ├── Card.jsx
│ ├── Loader.jsx
│ └── Error.jsx
│
├── context/
│ ├── AuthContext.jsx
│ └── CartContext.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── Products.jsx
│ ├── ProductDetail.jsx
│ ├── Login.jsx
│ ├── Signup.jsx
│ └── Cart.jsx
│
├── router/
│ ├── AppRouter.jsx
│ └── ProtectedRoute.jsx
│
├── styles.css
├── App.jsx
└── main.jsx
```

