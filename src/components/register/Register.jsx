import { AuthContext } from "@/Context/AuthContext";
import { Result } from "postcss";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoUrl: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;
    return hasUpperCase && hasLowerCase && isValidLength;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, photoUrl, password } = formData;

    if (!validatePassword(password)) {
      toast.error(
        "Password must be at least 6 characters long, contain an uppercase letter, and a lowercase letter."
      );
      return;
    }

    const object = {
      email: email,
      name: name,
      photoUrl: photoUrl,
      password: password,
    };

    createUser(email, password).then((result) => {
      if (result.user) {
        console.log(result.user);
        fetch("https://travel-management-server.vercel.app/addtouristspots-post", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(object),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              console.log(data);
              toast.success("Registration successful!");
            }
          });
      }
    });

    // Registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="photoUrl">
              Photo URL
            </label>
            <input
              type="text"
              name="photoUrl"
              value={formData.photoUrl}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
