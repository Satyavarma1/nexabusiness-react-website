# 🛒 NexaCart — React E-commerce Frontend

NexaCart is a modern, production-minded e-commerce frontend built with React.js.

The application demonstrates a real-world shopping experience with product browsing, search, filtering, cart management, wishlist functionality, responsive layouts, form validation, and frontend-only checkout and authentication flows.

The project is designed as a portfolio application to demonstrate scalable React development, reusable components, state management, routing, and responsive UI implementation.

---

## 🚀 Live Demo

👉 **[View Live Demo](https://nexabusiness-react-website.vercel.app/)**


---

## 📂 Source Code

👉 **[View GitHub Repository](https://github.com/Satyavarma1/nexabusiness-react-website)**

---

## ✨ Features

### 🛍️ Product Browsing

- Product listing
- Product details
- Product categories
- Product cards
- Responsive product grid
- Product availability and pricing

### 🔎 Search & Filtering

- Product search
- Category filtering
- Price filtering
- Sorting
- Dynamic product results
- Empty search state

### ❤️ Wishlist

- Add products to wishlist
- Remove products from wishlist
- Wishlist state managed with Redux Toolkit
- Persistent UI state

### 🛒 Shopping Cart

- Add products to cart
- Remove products
- Increase/decrease quantity
- Calculate subtotal
- Cart summary
- Empty cart state

### 🔐 Authentication

- Login interface
- Registration interface
- Form validation
- Frontend-only authentication flow
- Authentication feedback states

### 💳 Checkout

- Checkout workflow
- Customer information form
- Form validation
- Order summary
- Frontend-only checkout flow
- Order confirmation UI

### 📱 Responsive Design

The application is optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

---

## 🧩 UI Components

The project uses reusable React components for:

- Header
- Navigation
- Product cards
- Product filters
- Search bar
- Buttons
- Forms
- Modals
- Cart components
- Wishlist components
- Checkout components
- Loading states
- Empty states
- Error states

This makes the application easier to maintain and extend.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| Vite | Development and build tooling |
| JavaScript | Application logic |
| Redux Toolkit | Global state management |
| React Router | Client-side routing |
| SCSS | Styling |
| Axios | API/service architecture |
| React Hook Form | Form management |
| Yup | Form validation |
| Lucide React | Icons |

---

## 🏗️ Application Architecture

The project follows a modular React architecture with separate responsibilities for:

- Components
- Pages
- Redux state
- Services
- Product data
- Routing
- Forms
- Styling
- Utilities

Redux Toolkit is primarily used for application-wide state such as:

- Cart
- Wishlist
- Authentication

Local component state is used for temporary UI state such as:

- Modal visibility
- Form interactions
- Filters
- Dropdowns

---

## 📁 Folder Structure

```text
src/
│
├── assets/
│   └── Images and static assets
│
├── components/
│   ├── common/
│   │   └── Reusable UI components
│   │
│   ├── layout/
│   │   └── Header, Footer and navigation
│   │
│   ├── product/
│   │   └── Product-related components
│   │
│   ├── cart/
│   │   └── Cart components
│   │
│   ├── wishlist/
│   │   └── Wishlist components
│   │
│   └── checkout/
│       └── Checkout components
│
├── data/
│   └── Local product data
│
├── features/
│   ├── cart/
│   ├── wishlist/
│   └── auth/
│
├── hooks/
│   └── Reusable React hooks
│
├── pages/
│   ├── Home/
│   ├── Products/
│   ├── ProductDetails/
│   ├── Cart/
│   ├── Wishlist/
│   ├── Login/
│   ├── Register/
│   └── Checkout/
│
├── services/
│   └── API/service modules
│
├── store/
│   ├── store.js
│   └── Redux slices
│
├── styles/
│   ├── variables/
│   ├── mixins/
│   └── global styles
│
└── utils/
    └── Helper and utility functions
