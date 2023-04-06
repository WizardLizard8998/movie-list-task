import * as React from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function FCard(props) {
  const { filmId, filmname, filmdesc, filmimdb, filmyear, filmtype } = props;

  const [checked, setChecked] = React.useState(false);

  const watched = (filmId) => {


    let uData = localStorage.getItem("UserData");
    uData = JSON.parse(uData)

    
    uData[filmId].watched= "true"
    
    localStorage.setItem("UserData", JSON.stringify(uData));

  
  };

  const fav = (filmId) =>{

    let uData =localStorage.getItem("UserData");
    uData = JSON.parse(uData);
  

   

    if(uData[filmId].favorite === "true"){
      uData[filmId].favorite = "false";
    }else if(uData[filmId].favorite === "false"){
      uData[filmId].favorite = "true";
    }

    localStorage.setItem("UserData",JSON.stringify(uData));
   

  }
  

  return (
    <>
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
            {filmname}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Film Açıklaması: <br />
            {filmdesc}
            <br />
            <br /> imdb: {filmimdb}
            <br />
            <br />
            yapım yılı:{filmyear}
            <br />
            <br />
            film tipi:{filmtype}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="inherit" onClick={() => fav(filmId)}>
            Favoriye Ekle/Çıkar
          </Button>
          <Button variant="outlined" color="inherit" onClick={() => watched(filmId)}>
            İzledim
          </Button>
        </CardActions>
      </React.Fragment>
    </>
  );
}

export default function OutlinedCard(props) {
  const { filmId, filmname, filmdesc, filmimdb, filmyear, filmtype } = props;

  return (
    <Box class="Card" sx={{ minWidth: 500 }}>
      <FCard
        filmId={filmId}
        filmname={filmname}
        filmdesc={filmdesc}
        filmimdb={filmimdb}
        filmyear={filmyear}
        filmtype={filmtype}
      />
    </Box>
  );
}
