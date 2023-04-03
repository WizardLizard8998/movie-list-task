import React from "react";
import { useState } from "react";

//for testing

export function favClick(props) {
  const { filmId } = props;

  // const [info,setInfo] = useState([]);

  console.log(filmId);

  const user = localStorage.getItem("user");

  console.log(user);

  let data = JSON.parse(user);

  console.log(data);

  data = data.list;

  data = data.filter((film) => film.filmId == filmId);

  console.log(data);

  /*const list = JSON.parse(user).list.find((film) => film.filmId === filmId);
  const filmIndex = list.findIndex((film) => film.filmId === filmId);

  list[filmIndex].favorite = "true";
  localStorage.setItem("userList", JSON.stringify(list));*/
}
