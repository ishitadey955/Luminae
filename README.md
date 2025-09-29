# Luminae


---

🛒 MERN E-Commerce App

A full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React, Node.js).
This project includes features like product listings, cart management, order management, authentication, and an admin dashboard for managing orders and featured images.


---

🚀 Features

User Side

🛍️ Browse products with images and details

🛒 Add/remove items from cart

💳 Checkout with payment method selection

📦 Track order status (Pending, In Process, In Shipping, Delivered, Rejected)

🔐 Authentication (Register/Login)


Admin Side

📊 Manage orders (view, update status)

🖼️ Upload and manage featured images

📦 View all orders with detailed info

✅ Role-based access (Admin / User)



---

🛠️ Tech Stack

Frontend

React.js (with Vite)

Redux Toolkit (state management)

Tailwind CSS + ShadCN UI (UI components)


Backend

Node.js + Express.js

MongoDB (via Mongoose)

JWT Authentication


Other Tools

Axios (API calls)

Multer (file uploads)

Cloudinary (optional image storage)



---

📂 Project Structure

mern-ecommerce/
│── client/              # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── store/       # Redux slices
│   │   └── pages/       # Pages (Home, Cart, Admin, etc.)
│   └── public/
│
│── server/              # Node/Express backend
│   ├── models/          # Mongoose schemas
│   ├── controllers/     # Business logic
│   ├── routes/          # API routes
│   └── config/          # DB and server config
│
└── README.md


---

⚙️ Installation & Setup

1️⃣ Clone the repository

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

Create a .env file in server/:

PORT=5000
MONGO_URI=your_mongo_db_connection
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name   # optional
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4️⃣ Run the project

Start backend:


cd server
npm run dev

Start frontend:


cd client
npm run dev

The app should now be running at:
👉 Frontend: http://localhost:5173
👉 Backend: http://localhost:5000

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



