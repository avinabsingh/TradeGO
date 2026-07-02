import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ username }) => {
  const [menuOption, setMenuOption] = useState(0);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const normal = "menu";
  const activeMenu = "menu selected";

  const handleOnMenuClick = (index) => {
    setMenuOption(index);
  };

  const handleOnProfileClick = () => {
    setProfileDropdown(!profileDropdown);
  };

  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleOnMenuClick(0)}
            >
              <p className={menuOption === 0 ? activeMenu : normal}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleOnMenuClick(1)}
            >
              <p className={menuOption === 1 ? activeMenu : normal}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleOnMenuClick(2)}
            >
              <p className={menuOption === 2 ? activeMenu : normal}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleOnMenuClick(3)}
            >
              <p className={menuOption === 3 ? activeMenu : normal}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleOnMenuClick(4)}
            >
              <p className={menuOption === 4 ? activeMenu : normal}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleOnMenuClick(5)}
            >
              <p className={menuOption === 5 ? activeMenu : normal}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div
  className="profile"
  onClick={handleOnProfileClick}
  style={{ position: "relative", cursor: "pointer" }}
>
  <div className="avatar">
    {username ? username.charAt(0).toUpperCase() : "U"}
  </div>

  <p className="username">
    {username || "User"}
  </p>

  {profileDropdown && (
    <div
      className="profile-dropdown"
      style={{
        position: "absolute",
        top: "50px",
        right: "0",
        backgroundColor: "white",
        border: "1px solid #ddd",
        borderRadius: "5px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        minWidth: "150px",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          padding: "10px",
          borderBottom: "1px solid #eee",
          fontWeight: "bold",
        }}
      >
        {username}
      </div>

      <div
        style={{
          padding: "10px",
          cursor: "pointer",
          color: "#e74c3c",
        }}
        onClick={() => {
          window.location.href = process.env.REACT_APP_LANDING_URL;
        }}
      >
        Logout
      </div>
    </div>
  )}
</div>
      </div>
    </div>
  );
};

export default Menu;