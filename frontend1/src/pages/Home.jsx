import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/desktopone">Login</Link>
        </li>
        <li>
          <Link to="/desktoptwo">Signup</Link>
        </li>
        <li>
          <Link to="/desktopthree">Personal Information </Link>
        </li>
        <li>
          <Link to="/desktopfour">Academic Background</Link>
        </li>
        <li>
          <Link to="/desktopfive">desktopfive</Link>
        </li>
        <li>
          <Link to="/landing">landing</Link>
        </li>
        <li>
          <Link to="/DocWallet">DocWallet</Link>
        </li>
        <li>
          <Link to="/DocWalletView">DocWallet View</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
