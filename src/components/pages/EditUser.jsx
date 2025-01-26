import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../UserForm";
import { updateUser, getUsers } from "../../services/api";
import { useState, useEffect } from "react";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      {error && <div className="text-red-500">{error}</div>}
      {initialData && <UserForm onSubmit={handleSubmit} initialData={initialData} />}
    </div>
  );
};

export default EditUser;