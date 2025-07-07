import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="images.png" />
        </div>
        <div className="nav-item">
          <ul>
            <li href="#">MENU</li>

            <li href="#">LOCATION</li>

            <li href="#">CONTACT</li>

            <li href="#">ABOUT</li>
          </ul>
        </div>
        <div className="login">
          <button className="login-button">LogIn</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
