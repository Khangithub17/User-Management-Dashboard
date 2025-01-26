import UserForm from "../UserForm";
import { updateUser, getUsers } from "../../services/api";
import { useState, useEffect } from "react";
import Modal from "../Modal";

const EditUser = ({ isOpen, onClose, onUserUpdated, id }) => {
  const [initialData, setInitialData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const users = await getUsers();
        const user = users.find(user => user.id === parseInt(id));
        if (user) {
          setInitialData(user);
        } else {
          setError("User not found.");
        }
      } catch (error) {
        setError("Failed to fetch user data.");
      }
    };
    if (id) {
      fetchUser();
    }
  }, [id]);

  const handleSubmit = async (user) => {
    try {
      await updateUser(parseInt(id), user);
      onUserUpdated(); // Notify the parent component that a user was updated
      onClose(); // Close the modal
    } catch (error) {
      setError("Failed to update user.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-white text-lg font-bold mb-4 bg-[#5D87FF] p-4 rounded-t-lg">Edit User</h2>
      {error && <div className="text-red-500">{error}</div>}
      {initialData && <UserForm onSubmit={handleSubmit} initialData={initialData} />}
    </Modal>
  );
};

export default EditUser;