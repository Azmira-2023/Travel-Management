import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { AuthContext } from "@/Context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  // console.log(user);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <nav className="p-4 flex flex-col md:flex-row items-center justify-between text-white">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold flex items-center">
            Website Logo
          </Link>
        </div>
        <div
          className={`md:flex items-center space-x-12 mt-4 md:mt-0 p-8 text-xl ${
            menuOpen ? "" : "hidden"
          }`}
        >
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/all-tourist-spots" className="text-white">
            All Tourist Spots
          </Link>
          <Link to="/add-tourist-spot" className="text-white">
            Add Tourist Spot
          </Link>
          <Link to="/my-list" className="text-white">
            My List
          </Link>

          {user?.email ? (
            <>
              <p>{user?.email}</p>
              <button onClick={logout}>LogOut</button>
            </>
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="text-black rounded-full bg-white px-4 py-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-black rounded-full bg-white px-4 py-2"
              >
                Register
              </Link>
            </div>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.5 4.75A.75.75 0 013.25 4h13.5a.75.75 0 010 1.5H3.25A.75.75 0 012.5 4.75zm15.25 5.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5zM1 5.5a.75.75 0 011.5 0v9a.75.75 0 01-1.5 0v-9zM5 7.25a.75.75 0 000 1.5h9a.75.75 0 000-1.5H5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
