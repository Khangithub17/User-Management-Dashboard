import UserForm from "../UserForm";
import { addUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "../Modal";

const AddUser = ({ isOpen, onClose, onUserAdded }) => {
  const [error, setError] = useState(null);

  const handleSubmit = async (user) => {
    try {
      await addUser(user);
      toast.success("User added successfully!");
      onUserAdded(); // Notify the parent component that a user was added
      setTimeout(() => {
        onClose();
      }, 2000); // Close modal after 2 seconds
    } catch (error) {
      setError("Failed to add user.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-white text-lg font-bold mb-4 bg-[#5D87FF] p-4 rounded-t-lg">Create User</h2>
      {error && <div className="text-red-500">{error}</div>}
      <UserForm onSubmit={handleSubmit} />
      <ToastContainer />
    </Modal>
  );
};

export default AddUser;