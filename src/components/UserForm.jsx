import { useState } from "react";

const UserForm = ({ onSubmit, initialData }) => {
  const [user, setUser] = useState(initialData || { firstName: "", lastName: "", email: "", department: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!user.firstName) errors.firstName = "First Name is required";
    if (!user.lastName) errors.lastName = "Last Name is required";
    if (!user.email) errors.email = "Email is required";
    if (!user.department) errors.department = "Department is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(user);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-2">
        <input name="firstName" placeholder="First Name" value={user.firstName} onChange={handleChange} className="border p-2 w-full" />
        {errors.firstName && <div className="text-red-500">{errors.firstName}</div>}
      </div>
      <div className="mb-2">
        <input name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange} className="border p-2 w-full" />
        {errors.lastName && <div className="text-red-500">{errors.lastName}</div>}
      </div>
      <div className="mb-2">
        <input name="email" placeholder="Email" value={user.email} onChange={handleChange} className="border p-2 w-full" />
        {errors.email && <div className="text-red-500">{errors.email}</div>}
      </div>
      <div className="mb-2">
        <input name="department" placeholder="Department" value={user.department} onChange={handleChange} className="border p-2 w-full" />
        {errors.department && <div className="text-red-500">{errors.department}</div>}
      </div>
      <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded hover:from-green-500 hover:to-blue-600">Submit</button>
    </form>
  );
};

export default UserForm;