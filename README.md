#   Modular Architecture - User CRUD API

A scalable and maintainable RESTful Backend API built with **Node.js, Express, TypeScript, and Prisma ORM**, following a clean **Modular Architecture** pattern.

This project demonstrates how to structure a modern Node.js & TypeScript application by separating concerns into distinct modules, utilities, middleware, and database layers using Prisma.

---

## ✨ Features

- 🏗️ **Modular Architecture**: Clean separation of routes, controllers, and services per feature module.
- 👤 **User Management (CRUD)**: Complete user creation, retrieval, updating, and deletion workflow.
- 💎 **Prisma ORM Integration**: Type-safe database management and queries.
- 🛡️ **Robust Error Handling**: Centralized error management using custom `AppError`, `globalErrorHandler`, and `notfound` middlewares.
- ⚡ **Async Utility Wrappers**: Clean error handling in routes using `catchAsync` and standardized API responses via `sendResponse`.
- ⚙️ **TypeScript Supported**: Fully type-safe codebase with strictly configured setup.

---

## 📁 Project Structure

```text
modular-architecture-user-crud/
├── prisma/
│   └── schema.prisma         # Prisma database schema definition
├── src/
│   ├── config/
│   │   └── index.ts          # Central environment configuration
│   ├── generated/            # Auto-generated Prisma client types
│   ├── interface/            # Custom TypeScript interfaces/types
│   ├── middleware/           # Express middleware functions
│   │   ├── AppError.ts
│   │   ├── globalErrorHandler.ts
│   │   └── notfound.ts
│   ├── modules/              # Feature modules
│   │   └── user/
│   │       ├── user.controller.ts
│   │       ├── user.routes.ts
│   │       └── user.service.ts
│   ├── routers/              # Application root router
│   │   └── routes.ts
│   ├── utils/                # Utility and helper modules
│   │   ├── catchAsync.ts
│   │   ├── prisma.ts         # Singleton Prisma client instance
│   │   └── sendResponse.ts
│   ├── app.ts                # Express application initialization
│   └── server.ts             # Server entry point
├── .env                      # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
├── prisma.config.ts          # Prisma configuration
├── tsconfig.json             # TypeScript compiler settings
└── README.md                 # Project documentation
```

---

## 🛠️ Tech Stack

- **Runtime Environment**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: MongoDB (configured via Prisma)

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running on your machine.

### 📋 Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.0.0 or higher recommended)
- **npm**
- Target database instance (MongoDB)

---

### 📥 Installation & Setup Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/shakilahamed07/Modular_Architecture-User-CRUD-.git
   cd Modular_Architecture-User-CRUD-
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and define your variables:
   ```env
   PORT=5000
   DATABASE_URL="postgresql://username:password@localhost:5432/user_crud_db?schema=public"
   NODE_ENV=development
   ```

4. **Run PrismaGenerate Client**
   ```bash
   npx prisma db push
   npx prisma generate
   ```

5. **Start the Application**

   - **Development Mode** (with auto-reload):
     ```bash
     npm run dev
     ```

   - **Build & Production Mode**:
     ```bash
     npm run build
     npm start
     ```

6. **Verify Server Status**
   Open your browser or API client (Postman) and test:
   `http://localhost:5000`

---

## 🔌 API Endpoints

### User Endpoints (`/api/v1/users`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/v1/users` | Create a new user record |
| **GET** | `/api/v1/users` | Retrieve all users |
| **GET** | `/api/v1/users/:id` | Get details of a single user by ID |
| **PATCH** | `/api/v1/users/:id` | Update user details |
| **DELETE** | `/api/v1/users/:id` | Delete a user |

---

## 📝 License

Distributed under the MIT License.

👨‍💻 **Developed by [Shakil Ahamed](https://github.com/shakilahamed07)**