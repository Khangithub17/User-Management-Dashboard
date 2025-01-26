import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const LOCAL_STORAGE_KEY = "userDashboardUsers";

const getLocalStorageUsers = () => {
  const users = localStorage.getItem(LOCAL_STORAGE_KEY);
  return users ? JSON.parse(users) : [];
};

const setLocalStorageUsers = (users) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
};

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    const apiUsers = response.data.slice(0, 5); // Get only 5 users from API
    const localUsers = getLocalStorageUsers();
    return [...apiUsers, ...localUsers];
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const addUser = async (user) => {
  try {
    const localUsers = getLocalStorageUsers();
    const newUser = { ...user, id: Date.now() }; // Assign a unique ID
    localUsers.push(newUser);
    setLocalStorageUsers(localUsers);
    return newUser;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

export const updateUser = async (id, updatedUser) => {
  try {
    const localUsers = getLocalStorageUsers();
    const userIndex = localUsers.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      localUsers[userIndex] = { ...localUsers[userIndex], ...updatedUser };
      setLocalStorageUsers(localUsers);
      return localUsers[userIndex];
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    let localUsers = getLocalStorageUsers();
    localUsers = localUsers.filter(user => user.id !== id);
    setLocalStorageUsers(localUsers);
    return id;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};