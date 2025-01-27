import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8); // Set the limit to 8 users per page
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      setError("Failed to fetch users.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      setError("Failed to delete user.");
    }
  };

  const handleUserAdded = () => {
    fetchUsers(); // Refresh the user list after a new user is added
  };

  const handleUserUpdated = () => {
    fetchUsers(); // Refresh the user list after a user is updated
  };

  // Pagination logic here we make a slice of the users array based on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">User List</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#5D87FF] text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center cursor-pointer"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add User
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Department</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map(user => (
              <tr key={user.id} className="text-center border">
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.firstName}</td>
                <td className="border p-2">{user.lastName}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.department}</td>
                <td className="p-2 flex justify-center">
                  <button
                    onClick={() => {
                      setEditUserId(user.id);
                      setIsEditModalOpen(true);
                    }}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2 flex items-center"
                  >
                    <FontAwesomeIcon icon={faEdit} className="mr-1" />
                    Edit
                  </button>
                  <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center">
                    <FontAwesomeIcon icon={faTrash} className="mr-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 cursor-pointer"
        >
          Previous
        </button>
        <div className="flex justify-center">
          {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={nextPage}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 cursor-pointer"
        >
          Next
        </button>
      </div>
      <AddUser isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onUserAdded={handleUserAdded} />
      {isEditModalOpen && (
        <EditUser
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onUserUpdated={handleUserUpdated}
          id={editUserId}
        />
      )}
    </div>
  );
};

export default UserList;