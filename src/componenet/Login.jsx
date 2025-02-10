import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import Profile from "./Profile";
import Start from "./Start";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useContext(UserContext);

  const validatePassword = (value) => {
    const hasNumber = /\d/.test(value);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const minLength = value.length >= 8;

    if (!hasNumber) {
      setError("Password must contain at least one number.");
      return false;
    } else if (!hasSymbol) {
      setError("Password must contain at least one symbol.");
      return false;
    } else if (!minLength) {
      setError("Password must be at least 8 characters long.");
      return false;
    } else {
      setError(""); // Clear error if valid
      return true;
    }
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword(password)) {
      setUser({ username, password });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-200 via-purple-600 to-pink-500 ">
      <div className="m-5 gap-1.5 h-[65vh] w-[45vh] bg-white flex flex-col justify-center items-center p-4 rounded-lg shadow-lg ">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 ">Login</h1>

        <input
          className="mb-10 shadow-lg h-[5vh] w-full"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="mb-10 shadow-lg h-[5vh] w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          className={`w-full rounded-lg p-2 transition-all duration-300 ${
            username && password && !error
              ? "bg-gradient-to-r from-blue-400 via-purple-400 to-violet-600 hover:bg-green-600"
              : "bg-gray-400 cursor-not-allowed opacity-50"
          }`}
          onClick={handleSubmit}
          disabled={!username || !password || error}
        >
          Submit
        </button>

        <Profile />
        <Start />
      </div>
    </div>
  );
}

export default Login;
