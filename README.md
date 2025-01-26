📌 User Dashboard (React + Vite + Tailwind CSS)
A simple CRUD web application where users can view, add, edit, and delete user details using a mock API (JSONPlaceholder). Built with React, Vite, Tailwind CSS, Axios, React Icons, and React Hot Toast for notifications. 🎉

🚀 Features
✅ Fetch and display users from the API
✅ Add a new user (Simulated API response)
✅ Edit user details
✅ Delete a user
✅ Toaster notifications for success/error messages 🔔
✅ Responsive UI with Tailwind CSS
✅ Modern design with React Icons
✅ Error handling for API failures
✅ Modular and scalable code structure

📂 Folder Structure
csharp
Copy
Edit
user-dashboard/
│── public/               # Static assets
│── src/
│   ├── components/       # Reusable UI components
│   │   ├── UserCard.jsx
│   │   ├── UserForm.jsx
│   │   ├── UserList.jsx
│   ├── pages/            # Pages
│   │   ├── Home.jsx
│   ├── api/              # API calls
│   │   ├── userService.js
│   ├── hooks/            # Custom hooks
│   ├── styles/           # Global styles
│   ├── App.jsx           # Main component
│   ├── main.jsx          # ReactDOM entry
│── package.json
│── tailwind.config.js
│── README.md
🛠️ Tech Stack
Frontend: React + Vite ⚡
Styling: Tailwind CSS 🎨
API Requests: Axios 🌐
Icons: React Icons 🚀
Toaster Notifications: React Hot Toast 🔔
Mock API: JSONPlaceholder 🛠️
📥 Installation & Setup
1️⃣ Clone the repository
sh
Copy
Edit
git clone https://github.com/Khangithub17/User-Management-Dashboard.git
cd user-dashboard
2️⃣ Install dependencies
sh
Copy
Edit
npm install
3️⃣ Start the development server
sh
Copy
Edit
npm run dev
The app will be live at http://localhost:5173/ 🎉

🔥 Toaster Notifications
This project uses React Hot Toast for showing notifications on API actions.
📌 Install Toaster if not already installed

sh
Copy
Edit
npm install react-hot-toast
📌 Example Usage

jsx
Copy
Edit
import { toast } from 'react-hot-toast';

toast.success("User added successfully!");
toast.error("Failed to fetch users. Try again!");
Ensure that you wrap the App component with <Toaster /> inside main.jsx:

jsx
Copy
Edit
import { Toaster } from 'react-hot-toast';

<Toaster position="top-right" reverseOrder={false} />
⚙️ API Details
This project interacts with the JSONPlaceholder API:
📌 Base URL: https://jsonplaceholder.typicode.com/users

Functionality	Method	Endpoint
Fetch Users	GET	/users
Add User	POST	/users
Edit User	PUT	/users/:id
Delete User	DELETE	/users/:id
🚨 Troubleshooting
💡 If you face issues while running the project:

Ensure Node.js and npm are installed (node -v & npm -v).
Run npm install again if dependencies are missing.
Clear cache and try again: npm cache clean --force
📜 License
This project is MIT Licensed. Feel free to use and modify it! 🚀

💡 Future Improvements
✅ Implement pagination
✅ Add validation for user input
✅ Improve UI/UX with animations
🤝 Contributing
PRs are welcome! Fork the repo and submit your contributions. 😊

