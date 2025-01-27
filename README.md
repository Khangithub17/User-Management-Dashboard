## 📌 User Dashboard
A simple React-based user management dashboard where users can view, add, edit, and delete users using a mock backend API.

## ✨ Features
✅ Fetch and display users from an API  
✅ Add new users with a form  
✅ Edit existing users  
✅ Delete users  
✅ Error handling and notifications with React Toaster  
✅ Clean and responsive UI with Tailwind CSS  
✅ Modular structure with Reusable Components  

## 📂 Folder Structure
```
user-dashboard/
│── public/               # Static assets
│── src/
│   ├── assets/           # Images, icons, etc.
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Modal.jsx
│   │   ├── UserForm.jsx
│   │   ├── UserList.jsx
│   ├── pages/            # Pages
│   │   ├── Home.jsx
│   │   ├── AddUser.jsx
│   │   ├── EditUser.jsx
│   ├── services/         # API calls
│   │   ├── api.js
│   ├── App.jsx           # Main component
│   ├── main.jsx          # ReactDOM entry
│── package.json          # Dependencies
│── tailwind.config.js    # Tailwind config
│── vite.config.js        # Vite config
│── README.md             # Documentation
```

## 🚀 Tech Stack
- **React (Vite)**
- **Tailwind CSS** (for styling)
- **Axios** (for API calls)
- **React Icons** (for UI elements)
- **React Toaster** (for notifications)
- **JSONPlaceholder** (mock backend API)

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/user-dashboard.git
cd user-dashboard
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) 🚀

## 🔌 API Setup
We are using **JSONPlaceholder** as a mock API.  
API Endpoint: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

| Action       | Method | Endpoint               |
|-------------|--------|------------------------|
| Fetch Users | GET    | `/users`               |
| Add User    | POST   | `/users`               |
| Edit User   | PUT    | `/users/:id`           |
| Delete User | DELETE | `/users/:id`           |

## 🎨 Styling
- **Tailwind CSS** is used for styling. Configuration is in `tailwind.config.js`.
- You can modify styles in `index.css` or use Tailwind classes directly.

## 🔔 Notifications
We use **React Toaster** for success/error messages.

#### Example usage:
```jsx
import { toast } from "react-hot-toast";

toast.success("User added successfully!");
toast.error("Something went wrong!");
```

## 📌 Git Workflow
### Push Code to GitHub
```sh
git add .
git commit -m "Initial commit 🎉"
git branch -M main
git push -u origin main
```

## 📜 License
This project is **MIT Licensed**.

---
Let me know if you need any modifications! 🚀
