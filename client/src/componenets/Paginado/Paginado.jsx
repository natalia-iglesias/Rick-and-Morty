import React from "react";
import style from "../Paginado/Paginado.module.css";

//import {actualPage} from '../../actions/index'

export default function Paginado({
  charactersPerPage,
  allCharacters,
  paginado,
}) {
  const pageNumbers = [];

  let pageMax = 1 + Math.ceil((allCharacters - 9) / charactersPerPage);

  for (let i = 1; i <= pageMax; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.contenedor}>
      <nav>
        <ul>
          {pageNumbers &&
            pageNumbers.map((number) => {
              return (
                <li key={number} className={style.li}>
                  <button
                    className={style.btn}
                    onClick={() => paginado(number)}
                  >
                    {number}
                  </button>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
}
