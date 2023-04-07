import React from "react";
import { Link } from "react-router-dom";
import style from "../LandingPage/Landing.module.css";

export default function LandingPage() {
  return (
    <div className={style.bkg}>
      <Link to="/home">
        <button className={style.btn}>Ingresar</button>
      </Link>
    </div>
  );
}
