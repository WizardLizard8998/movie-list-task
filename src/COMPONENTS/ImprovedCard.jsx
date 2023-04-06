import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { movies } from "../DATA/Movies";

function ImprovedCard(props) {
    let uData = localStorage.getItem("UserData");
   
    const Info = JSON.parse(uData);
  
    const [wdata, setwData] = useState([]);
    const [fdata, setfData] = useState([]);
  
    useEffect(() => {
      const watched = Info.filter((filter) => filter.watched === "true");
      const favorite = Info.filter((filter) => filter.favorite === "true");
  
      setfData(favorite);
  
      setwData(watched);
  
    }, []);
  
  
  
    const Favfov = (props) => {
      const { filmid, filmname, filmdesc, filmimdb, filmtype, filmyear } = props;
  
      return (
        <Card sx={{ minWidth: 345 }}>
          <CardContent>
            <Typography glutterBottom variant="h6" component="div">
              {filmname}
            </Typography>
  
            <Typography glutterBottom variant="body2" component="div">
              {filmdesc}
            </Typography>
            <br/>
  
            <Typography glutterBottom variant="body2" component="div">
              imdb puanı : {filmimdb}
            </Typography>
            <Typography glutterBottom variant="body2" component="div">
              yapım yılı : {filmyear}
            </Typography>
            <Typography glutterBottom variant="body2" component="div">
              türü : {filmtype}
            </Typography>
          </CardContent>
        </Card>
      );
    };
  
    return (
      <Card sx={{ minWidth: 345 }}>
        <CardContent>
          <div class="listContent">
            <Typography glutterBottom variant="h6" component="div">
              Favorilerim
            </Typography>
            <Typography glutterBottom variant="body2" component="div">
              Favori film listenize buradan ulaşabilirsiniz
            </Typography>
  
            {fdata.map((data, index) => (
              <Favfov
                filmid={data.filmId}
                filmname={movies[data.filmId].film_name}
                filmdesc={movies[data.filmId].film_desc}
                filmimdb={movies[data.filmId].film_imdb}
                filmtype={movies[data.filmId].film_type}
                filmyear={movies[data.filmId].film_year}
              />
            ))}
          </div>
  
          <br />
          <br />
  
          <div class="listContent">
            <Typography glutterBottom variant="h6" component="div">
              İzleme geçmişi
            </Typography>
            <Typography glutterBottom variant="body2" component="div">
              Geçmişte izlediklerinize buradan ulaşabilirsiniz
            </Typography>
            {wdata.map((data, index) => (
              <Favfov
                filmid={data.filmId}
                filmname={movies[data.filmId].film_name}
                filmdesc={movies[data.filmId].film_desc}
                filmimdb={movies[data.filmId].film_imdb}
                filmtype={movies[data.filmId].film_type}
                filmyear={movies[data.filmId].film_year}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
  

  export default ImprovedCard;