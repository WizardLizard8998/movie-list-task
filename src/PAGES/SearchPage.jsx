import React, { useEffect, useState } from "react";

import "../TemplateCss.css";
import { Box, Button, TextField, Typography } from "@mui/material";

import { movies } from "../DATA/Movies";
import OutlinedCard from "../COMPONENTS/Card";

function SearchPage(props) {
  const [films, setFilms] = useState("");
  const [years, setYears] = useState("");
  const [imdbs, setImdbs] = useState("");
  const [types,setTypes] =useState("");

  const [resfilm, setResfilm] = useState([]);
  const [resyear, setResyear] = useState([]);
  const [resimdb, setResimdb] = useState([]);
  const [restype, setRestype] = useState([]);

  const [count, setCount] = useState(0);

  const SearchName = (name) => {
    const result = movies.filter((film) => film.film_name == name);

    setResfilm(result);

    

    setCount(1);

    setFilms("")
  };

  const SearchImdb = (imdb) => {
    const result = movies.filter((film) => film.film_imdb == imdb);

    setResimdb(result);
    setCount(2);
 
    setImdbs("")
  };

  const SearchYear = (year) => {
    const result = movies.filter((film) => film.film_year == year);

    setResyear(result);
    setCount(3);
   

    setYears("")
  };

  const SearchType =   (type) => {
    const result =  movies.filter((film) => film.film_type === type);

    setRestype(result);
    setCount(4);
   

    setTypes("");
  }

  useEffect(() => {}, [count]);

  return (
    <>
      <div class="HomePage">
        
        <div>
        <Typography variant="h4">Bu sayfada listede yer alan filmleri aratabilirsiniz</Typography>
        </div>

        <div>
          <Box
            sx={{
              minHeight: 150,
              minWidth: 150,
              background: "#4d3446",
              borderRadius: 10,
              padding: 2,
            }}
          >
            <Typography variant="body2"> film name search</Typography>
            <TextField
              id="film-ismi"
              label="Standard"
              variant="standard"
              color="info"
              
              onChange={(event) => {
                setFilms(event.target.value);
              }}
            >
              {" "}
              search{" "}
            </TextField>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => SearchName(films)}
            >
              filtrele
            </Button>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              minHeight: 150,
              minWidth: 150,
              background: "#4d3446",
              borderRadius: 10,
              padding: 2,
            }}
          >
            <Typography variant="body2"> imdb filtresi </Typography>
            <TextField
              id="imdb"
              label="Standard"
              variant="standard"
              color="primary"
              type="text"
              onChange={(event) => {
                setImdbs(event.target.value);
              }}
            >
              ara{" "}
            </TextField>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => SearchImdb(imdbs)}
            >
              filtrele
            </Button>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              minHeight: 150,
              minWidth: 150,
              background: "#4d3446",
              borderRadius: 10,
              padding: 2,
            }}
          >
            <Typography variant="body2"> yıl filtresi </Typography>
            <TextField
              id="yıl"
              label="Standard"
              variant="standard"
              onChange={(event) => {
                setYears(event.target.value);
              }}
            >
              {" "}
              ara{" "}
            </TextField>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => SearchYear(years)}
            >
              filtrele
            </Button>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              minHeight: 150,
              minWidth: 150,
              background: "#4d3446",
              borderRadius: 10,
              padding: 2,
            }}
          >
            <Typography variant="body2"> tür filtresi </Typography>
            <TextField
              id="yıl"
              label="Standard"
              variant="standard"
              onChange={(event) => {
                setTypes(event.target.value);
              }}
            >
              {" "}
              ara{" "}
            </TextField>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => SearchType(types)}
            >
              filtrele
            </Button>
          </Box>
        </div>


        <div>
          <Typography variant="h5" >Burada arama sonuçlarını görebilirsiniz.</Typography>
          {count == 1 &&
            resfilm.map((data, index) => (
              <OutlinedCard
                filmId={data.film_Id}
                filmname={data.film_name}
                filmdesc={data.film_desc}
                filmimdb={data.film_imdb}
                filmyear={data.film_year}
                filmtype={data.film_type}
              />
            ))}
          {count == 2 &&
            resimdb.map((data, index) => (
              <OutlinedCard
                filmId={data.film_Id}
                filmname={data.film_name}
                filmdesc={data.film_desc}
                filmimdb={data.film_imdb}
                filmyear={data.film_year}
                filmtype={data.film_type}
              />
            ))}
          {count == 3 &&
            resyear.map((data, index) => (
              <OutlinedCard
                filmId={data.film_Id}
                filmname={data.film_name}
                filmdesc={data.film_desc}
                filmimdb={data.film_imdb}
                filmyear={data.film_year}
                filmtype={data.film_type}
              />
            ))}
             {count == 4 &&
            restype.map((data, index) => (
              <OutlinedCard
                filmId={data.film_Id}
                filmname={data.film_name}
                filmdesc={data.film_desc}
                filmimdb={data.film_imdb}
                filmyear={data.film_year}
                filmtype={data.film_type}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
