import React, { useContext, useEffect, useState } from "react";
import OutlinedCard from "../COMPONENTS/Card";

import { movies } from "../DATA/Movies";



const user = localStorage.getItem("user");



function HomePage(props) {
  const data = movies;


  return (
    <>
      <div class="HomePage">
        {data &&
          data.map((data, index) => (
            <OutlinedCard
              key={index}
              filmId={data.film_Id}
              filmname={data.film_name}
              filmdesc={data.film_desc}
              filmimdb={data.film_imdb}
              filmyear={data.film_year}
              filmtype={data.film_type}
              
            />
          ))}
      </div>
    </>
  );
}

export default HomePage;
