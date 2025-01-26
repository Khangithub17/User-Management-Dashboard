import UserForm from "../UserForm";
import { addUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (user) => {
    try {
      await addUser(user);
      toast.success("User added successfully!");
      setTimeout(() => navigate("/"), 2000); // Navigate after 2 seconds
    } catch (error) {
      setError("Failed to add user.");
    }
  };

  return (
    <div>
      {error && <div className="text-red-500">{error}</div>}
      <UserForm onSubmit={handleSubmit} />
      <ToastContainer />
    </div>
  );
};

export default AddUser;