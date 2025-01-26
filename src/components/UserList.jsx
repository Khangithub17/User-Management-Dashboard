import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8); // Set the limit to 8 users per page

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

  // Pagination logic here we make a slice of the users array based on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">User List</h1>
        <Link to="/add" className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded hover:from-green-500 hover:to-blue-600 flex items-center">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add User
        </Link>
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
                  <Link to={`/edit/${user.id}`} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded hover:from-yellow-500 hover:to-orange-600 mr-2 flex items-center">
                    <FontAwesomeIcon icon={faEdit} className="mr-1" />
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(user.id)} className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-2 py-1 rounded hover:from-red-500 hover:to-pink-600 flex items-center">
                    <FontAwesomeIcon icon={faTrash} className="mr-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
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
    </div>
  );
};

export default UserList;