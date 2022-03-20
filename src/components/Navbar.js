import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");

    navigate("/");
  }
  return (
    <div className="navbar">
      <h2>E-App</h2>
      <div>
        <h3>Hi {localStorage.getItem("username")}</h3>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
