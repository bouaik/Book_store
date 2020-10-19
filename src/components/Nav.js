import React from "react";
import userImg from "../user.svg";

const Nav = () => {
  return (
    <div className="navbar">
      <h1 className="blue">Bookstore CMS</h1>
      <p>BOOKS</p>
      <p className="disabled">CATEGORIES</p>
      <div className="user-img">
        <img src={userImg} alt="Profile-image" />
      </div>
    </div>
  );
};

export default Nav;
