import React from "react";
import classes from "./styles.module.css";

const Button = ({ children }) => {
    return (
        <button className={classes.button}>
            {children}
        </button>
      );
    };
    
    export default Button;