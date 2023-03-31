import React, { useContext ,useEffect, useState } from "react";
import OutlinedCard from "../COMPONENTS/Card";

import { movies } from "../DATA/Movies";

import {UserDataContext} from "../DATA/DataContext"

  console.log(localStorage.getItem("user"))
  const user = localStorage.getItem("user")
  
  //console.log(data);
  console.log(user);
  console.log(typeof(user))
 

   function favClick(filmId){
  
    const user = localStorage.getItem("user")
    const list= JSON.parse(user).list.find(film => film.filmId === filmId)
    const filmIndex = list.findIndex(film => film.filmId === filmId);
    
    list[filmIndex].favorite = "true";
    localStorage.setItem('userList', JSON.stringify(list));
  }
  const list= JSON.parse(user).list.find(film => film.filmId === "3")
  
  console.log(list)


function HomePage(props) {
  const data = movies;
  
  //const [list , setList] = useState([]);

 // const {userid} = useContext(UserDataContext);
    const userid= 1;

  
  // const abc = list[0].list.filter(item => item.filmId === "3")[0];
  
  //.find(user => user.userId === userid).list
  
  /* 
  
  const favClick = (filmId) => {
    const filmIndex = list.findIndex(film => film.filmId === "3");
    
    list[filmIndex].favorite = "true";
    localStorage.setItem('userList', JSON.stringify(list));
  }
  */


  return (
    <>
      <div class="HomePage">
        {  
        data && 
        data.map((data, index) => (

        <OutlinedCard 
          key={index}
          filmId={data.film_Id}
          filmname={data.film_name}
          filmdesc={data.film_desc}
          filmimdb={data.film_imdb}
          filmyear={data.film_year}
          filmtype={data.film_type}
          fav={() => { 
           favClick(data.film_Id)

          }}
          izlendi={() => {console.log("kerem")}}
        />)
        
        )}

      </div>
    </>
  );
}

export default HomePage;
