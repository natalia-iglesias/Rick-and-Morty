import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions/index";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "../Details/Detail.module.css";

export default function Details(props) {
  console.log(props);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const myCharacter = useSelector((state) => state.detail);
  console.log(myCharacter);
  console.log(id);

  return (
    <div className={style.div}>
      <Link to="/home">
        <button className={style.btn}>volver</button>
      </Link>
      {myCharacter ? (
        <div>
          <h1 className={style.name}>Name: {myCharacter.name}</h1>
          <h2 className={style.h2}>Status: {myCharacter.status}</h2>
          <h2 className={style.h2}>Species: {myCharacter.species}</h2>
          <div className={style.img}>
            <img src={myCharacter.image} alt="imagen" />
          </div>
          <div>
            <li>
              <ul>
                <h2>Episodes: {myCharacter.episode}</h2>
              </ul>
            </li>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
