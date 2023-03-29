import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

function FCard(props) {
  const { filmId, filmname, filmdesc, filmimdb, filmyear, filmtype } = props;
  const [checked, setChecked] = React.useState(false);

  const ChangeBox = () => {
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }

    console.log(checked);
  };

  return (
    <>
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
            {filmname} 
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Film Açıklaması: <br />
            Genç ve başarılı bir bankacı olan Andy Dufresne, karısını ve onun
            sevgilisini öldürmek suçundan ömür boyu hapse mahkum edilir ve
            Shawshank hapishanesine gönderilir. Burada başta Red olmak üzere
            yeni arkadaşlar edinir. Hapishane yaşamını uyum sağlamaya çalışırken
            diğer yandan da bilgisi ve kültürüyle etrafındaki insanları
            etkilemeyi başaracaktır.
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
          {checked} izlendi checkbox
          <Checkbox onChange={ChangeBox} />
        </CardActions>
        <CardActions>
          {checked} fav checkbox
          <Checkbox onChange={ChangeBox} />
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
