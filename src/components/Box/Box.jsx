import React from "react";
import classes from "./styles.module.css";

const Box = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={classes.box}>
      {children}
    </div>
  );
};

export default Box;
