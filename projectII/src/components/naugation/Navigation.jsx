import React from "react";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div>
      <nav className={styles.navigation}>
        <img src="/image/aaa.png" />
        <div className="navlist">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
