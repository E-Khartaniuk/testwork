import React from "react";
import scss from "./SuccessSignUp.module.scss";
import successImg from "../../img/success-image.svg";

function SuccessSignUp() {
  return (
    <section className={scss.container}>
      <h2 className={scss.title}>User successfully registered</h2>
      <img src={successImg} alt="SuccessSignUp" className={scss.img} />
    </section>
  );
}

export default SuccessSignUp;
