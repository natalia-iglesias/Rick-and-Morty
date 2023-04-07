import React from "react";
import style from "../Cards/Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, image, id }) {
  console.log("aca", id);
  return (
    <div className={style.card}>
      <Link to={`/details/${id}`}>
        <div className={style.h}>
          <h3>{name}</h3>
        </div>
        <img className={style.img} src={image} alt="img" />
      </Link>
    </div>
  );
}
