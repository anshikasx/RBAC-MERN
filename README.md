RBAC MERN Application

📌 Project Overview

This project is a Role-Based Access Control (RBAC) web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).
The system allows different users to access different features based on their assigned roles such as Admin and User.
RBAC improves security by restricting access to authorized users only.

⸻

🚀 Features
	•	User Registration and Login
	•	JWT Authentication
	•	Role-Based Authorization (Admin / User)
	•	Protected Routes
	•	Admin Dashboard
	•	User Dashboard
	•	Create, Read, Update, Delete Users
	•	Password Hashing using bcrypt
	•	Secure Backend APIs

⸻

🛠️ Tech Stack

Frontend
	•	React.js
	•	HTML
	•	CSS
	•	JavaScript

Backend
	•	Node.js
	•	Express.js

Database
	•	MongoDB

Authentication
	•	JWT (JSON Web Token)
	•	bcrypt

⸻

📂 Project Structure
RBAC-MERN/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
│
└── README.md

🔐 RBAC Workflow
	1.	User registers or logs in.
	2.	Server verifies credentials.
	3.	JWT token is generated.
	4.	Token contains user role.
	5.	Middleware checks role before granting access.
	6.	Admin can manage users.
	7.	Normal users have limited access.

📄 License

This project is open-source and free to use.


