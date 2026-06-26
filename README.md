# 💰 Expense Tracker – MERN Stack

A full-stack **Expense Tracker** web application built using the **MERN Stack** following industry-standard development practices. The application enables users to securely manage their income and expenses, categorize transactions, visualize financial data through interactive charts, and monitor their financial health from a centralized dashboard.

The backend follows the **MVC (Model-View-Controller)** architecture for maintainability and scalability, while the frontend is built using **React** with **Redux Toolkit** and **TanStack Query** for efficient state and server data management.

---

# 🚀 Features

- 🔐 JWT-based User Authentication
- 👤 User Registration & Login
- 🔒 Protected Routes
- 💰 Add Income & Expense Transactions
- 📝 Update Existing Transactions
- ❌ Delete Transactions
- 🏷️ Category Management
- 📊 Interactive Dashboard
- 📈 Income vs Expense Analytics
- 📅 Date-wise Transaction Filtering
- ⚡ Optimized API Calls with React Query
- 📱 Responsive User Interface

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Redux Toolkit
- React Router DOM
- TanStack Query (React Query)
- Axios
- Formik
- Yup
- Chart.js
- React Chart.js 2
- React Icons

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Express Async Handler
- dotenv
- CORS

---

# 🏗️ Backend Architecture (MVC)

The backend is organized using the **Model-View-Controller (MVC)** architecture for better scalability and separation of concerns.

```
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── userController.js
│   ├── transactionController.js
│   └── categoryController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Transaction.js
│   └── Category.js
│
├── routes/
│   ├── userRoutes.js
│   ├── transactionRoutes.js
│   └── categoryRoutes.js
│
├── utils/
│
├── .env
├── server.js
└── package.json
```

---

# 🗄️ Database Models

### User

- Authentication
- Profile Information
- Password Hashing
- JWT Authentication

### Transaction

- Income/Expense Type
- Amount
- Description
- Date
- Category Reference
- User Reference

### Category

- Category Name
- Category Type (Income/Expense)
- User Reference

---

# 🔐 Authentication

Authentication is implemented using **JSON Web Tokens (JWT)**.

### Security Features

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Token Generation
- Protected API Routes
- Authentication Middleware
- Global Error Handling Middleware

---

# ⚛️ Frontend Structure

The React application is organized into modular folders for better maintainability.

```
frontend/
│
├── public/
│
├── src/
│   ├── components/
│   ├── redux/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

### Folder Description

| Folder | Purpose |
|---------|---------|
| **components/** | Reusable UI components such as forms, charts, cards, navigation, etc. |
| **redux/** | Redux Toolkit store, slices, and global state management |
| **services/** | API service functions for authentication, transactions, and categories |
| **utils/** | Helper functions, constants, and reusable utility methods |

---

# 📊 Dashboard

The dashboard provides an overview of the user's financial activity through interactive visualizations.

Features include:

- Total Income
- Total Expenses
- Current Balance
- Recent Transactions
- Expense Distribution Chart
- Income vs Expense Summary

Built using:

- Chart.js
- React Chart.js 2

---

# 🔄 State Management

## Redux Toolkit

Used for managing:

- Authentication State
- Logged-in User Information
- Global Application State

## TanStack Query

Used for:

- Server State Management
- API Requests
- Data Caching
- Automatic Refetching
- Mutations (Create, Update, Delete)
- Query Invalidation

---

# 📝 Form Management

Forms are implemented using:

- Formik
- Yup Validation

Used for:

- User Registration
- User Login
- Add Transaction
- Edit Transaction
- Category Management

---

# 📡 REST APIs

## Authentication

- Register User
- Login User
- Get User Profile
- Update Profile
- Change Password

## Transactions

- Create Transaction
- Get All Transactions
- Get Transaction Details
- Update Transaction
- Delete Transaction

## Categories

- Create Category
- Get Categories
- Update Category
- Delete Category

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 📦 Major Libraries Used

### Backend

- Express.js
- Mongoose
- JWT
- bcryptjs
- express-async-handler
- dotenv
- cors

### Frontend

- React
- Redux Toolkit
- React Redux
- React Router DOM
- TanStack Query
- Axios
- Formik
- Yup
- React Chart.js 2
- Chart.js
- React Icons

---

# 🚀 Future Enhancements

- Export Reports (PDF/Excel)
- Budget Planning
- Monthly Financial Reports
- Recurring Transactions
- Dark Mode
- Email Verification
- Password Reset
- Multi-Currency Support
- Responsive Mobile UI Improvements

---

# 👨‍💻 Author

**Lakshay Goyal**

B.Tech Computer Science Engineering  
MERN Stack Developer

If you found this project helpful, don't forget to ⭐ the repository!
