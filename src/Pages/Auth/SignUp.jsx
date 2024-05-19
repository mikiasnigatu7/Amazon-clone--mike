import React from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";

function SignUp() {
  return (
    <section>
      {/* logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
          className={classes.logo}
        />
      </Link>
      {/* form */}
    </section>
  );
}

export default SignUp;
