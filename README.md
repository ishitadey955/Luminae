

# 🛒 MERN E-Commerce App

A full-stack e-commerce application built using the **MERN stack** (MongoDB, Express.js, React, Node.js).  
This project includes features like product listings, cart management, order management, authentication,  
and an **admin dashboard** for managing orders and featured images.

---

## 🚀 Features

### User Side
- 🛍️ Browse products with images and details  
- 🛒 Add/remove items from cart  
- 💳 Checkout with payment method selection  
- 📦 Track order status (Pending, In Process, In Shipping, Delivered, Rejected)  
- 🔐 Authentication (Register/Login)  

### Admin Side
- 📊 Manage orders (view, update status)  
- 🖼️ Upload and manage featured images  
- 📦 View all orders with detailed info  
- ✅ Role-based access (Admin / User)  

---

## 🛠️ Tech Stack

### Frontend
- React.js (with Vite)  
- Redux Toolkit (state management)  
- Tailwind CSS + ShadCN UI (UI components)  

### Backend
- Node.js + Express.js  
- MongoDB (via Mongoose)  
- JWT Authentication  

### Other Tools
- Axios (API calls)  
- Multer (file uploads)  
- Cloudinary (optional image storage)  

---
#project structure
```bash
mern-ecommerce/
│── client/                   # React frontend
│   ├── public/               # Public assets
│   └── src/
│       ├── assets/           # Local images, icons, etc.
│       ├── components/       # Reusable UI components
│       ├── store/            # Redux slices
│       ├── pages/            # Pages (Home, Cart, Admin, etc.)
│       ├── App.jsx           # Main React App entry
│       └── main.jsx          # React DOM entry
│
│── server/                   # Node/Express backend
│   ├── config/               # DB and server config
│   ├── controllers/          # Business logic (e.g., feature-controller.js)
│   ├── models/               # Mongoose schemas
│   ├── routes/               # API routes
│   ├── uploads/              # Uploaded files (if stored locally)
│   └── server.js             # Main server entry
│
└── README.md                 # Project documentation


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/mern-ecommerce.git
cd mern-ecommerce

2️⃣ Install dependencies

Install frontend dependencies:

cd client
npm install

Install backend dependencies:

cd ../server
npm install

3️⃣ Environment variables

Create a .env file inside server/ with the following:

PORT=5000
MONGO_URI=your_mongo_db_connection
JWT_SECRET=your_jwt_secret

# Cloudinary (optional for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4️⃣ Run the project

Run backend server:

cd server
npm run dev

Run frontend app:

cd client
npm run dev

The app should now be running at:
👉 Frontend: http://localhost:5173
👉 Backend: http://localhost:5000


---

📸 Screenshots

(Add screenshots of Home Page, Cart, Admin Dashboard, etc.)


---

🤝 Contributing

1. Fork this repo


2. Create your feature branch (git checkout -b feature/my-feature)


3. Commit changes (git commit -m 'Add new feature')


4. Push to branch (git push origin feature/my-feature)


5. Create a Pull Request




---

📜 License

This project is licensed under the MIT License.


---

