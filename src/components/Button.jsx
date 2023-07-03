import React from "react";
import { mailTo } from "../constants";

const Button = ({ styles }) => (
  <a
    type="button"
    href={`mailto:${mailTo}`}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Comenzar
  </a>
);

export default Button;
