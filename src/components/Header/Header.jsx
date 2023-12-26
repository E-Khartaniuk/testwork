import React from "react";

import scss from "./Header.module.scss";

import logo from "../../img/logo.svg";
import testtask from "../../img/testtask.svg";

import AnchorButton from "../Button/AnchorButton";

function Header({ successRegister }) {
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        {/* <div className={scss.wideScreenContainer}> */}
        <div className={scss.logoContainer}>
          <img src={logo} alt="logo"></img>
          <img src={testtask} alt="testtask"></img>
        </div>
        <nav className={scss.headerBtnContainer}>
          <AnchorButton anchor={"#usersAnchor"} className={`anchorButton`}>
            Users
          </AnchorButton>
          <AnchorButton anchor={"#signUpAnchor"} className={`anchorButton`}>
            {successRegister ? "Log out" : "Sign up"}
          </AnchorButton>
        </nav>
        {/* </div> */}
      </div>
    </header>
  );
}

export default Header;
