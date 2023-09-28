import { useState } from "react";
import "../css/stylesheet.css";
import NavMenu from "./nav";
const Home = () => {
  return (
    <>
      <NavMenu></NavMenu>
      <h1>Tinder Para Habilidades</h1>
      <div id="login_div">
        <div className="row_elements">
          <p>User</p>
          <input id="user_input"></input>
        </div>
        <div className="row_elements">
          <p>Password</p>
          <input></input>
        </div>
        <button>Login</button>
      </div>
    </>
  );
};

export default Home;
