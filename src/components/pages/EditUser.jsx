import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../UserForm";
import { updateUser, getUsers } from "../../services/api";
import { useState, useEffect } from "react";
import Modal from "../Modal";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

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
    fetchUser();
  }, [id]);

  const handleSubmit = async (user) => {
    try {
      await updateUser(parseInt(id), user);
      navigate("/");
    } catch (error) {
      setError("Failed to update user.");
    }
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-white text-lg font-bold mb-4 bg-[#5D87FF] p-4 rounded-t-lg">Edit User</h2>
        {error && <div className="text-red-500">{error}</div>}
        {initialData && <UserForm onSubmit={handleSubmit} initialData={initialData} />}
      </Modal>
    </div>
  );
};

export default EditUser;