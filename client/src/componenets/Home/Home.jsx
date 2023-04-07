import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../redux/actions/index";
//import { Link } from "react-router-dom";
import Paginado from "../Paginado/Paginado";
import Card from "../Cards/Card";
import SearchBar from "../Search/SearchBar";
import style from "../Home/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.characters);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(5);
  const indexOfLastCharacters =
    currentPage === 1 ? 5 : currentPage * charactersPerPage;
  const indexFirstCharacters =
    currentPage === 1 ? 0 : indexOfLastCharacters - charactersPerPage;
  const currentCharacters = allCharacters.slice(
    indexFirstCharacters,
    indexOfLastCharacters
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCharacters());
  }

  return (
    <div className={style.bkg}>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Volver
      </button>
      <SearchBar />
      <div>
        <Paginado
          currentPage={currentPage}
          charactersPerPage={charactersPerPage}
          allCharacters={allCharacters.length}
          paginado={paginado}
        />
        {currentCharacters?.map((el) => {
          return (
            <Card key={el.id} name={el.name} image={el.image} id={el.id} />
          );
        })}
      </div>
    </div>
  );
}
