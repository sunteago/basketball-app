import React from "react";
import classes from "./index.module.css";

export default function ContentBox({ children }) {
  return <div className={classes.ContentBox}>{children}</div>;
}
