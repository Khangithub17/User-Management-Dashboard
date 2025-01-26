import UserForm from "../UserForm";
import { addUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "../Modal";

const AddUser = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (user) => {
    try {
      await addUser(user);
      toast.success("User added successfully!");
      setTimeout(() => {
        setIsModalOpen(false);
        navigate("/");
      }, 2000); // Close modal and navigate after 2 seconds
    } catch (error) {
      setError("Failed to add user.");
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#5D87FF] text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center cursor-pointer"
      >
        Add User
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-white text-lg font-bold mb-4 bg-[#5D87FF] p-4 rounded-t-lg">Create User</h2>
        {error && <div className="text-red-500">{error}</div>}
        <UserForm onSubmit={handleSubmit} />
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default AddUser;