import React from "react";

import "../TemplateCss.css";

import { Button } from "@mui/material";

import Typography from "@mui/material/Typography";

//import { useHistory } from "react-router-dom";

function Footer(props) {
  // const history = useHistory();

  return (
    <>
      <div class="footer">
        <div>
          <h3>Merhaba !</h3>
          <Typography>
            <li>
              <Button to="/Anasayfa"> Anasayfa </Button>
            </li>
          </Typography>
          <Typography>
            <li>
              <Button to="/Filmler"> Filmler </Button>
            </li>
          </Typography>
          <Typography>
            <li>
              <Button to="/Diziler"> Dizler</Button>
            </li>
          </Typography>
          <Typography>
            <li>
              <Button to="/Listem"> Listem </Button>
            </li>
          </Typography>
        </div>

        <div>
          <h3>Merhaba !</h3>
          <Typography>
            <li>Film Listesi için yapılmış olan demo sayfasıdır.</li>
          </Typography>
          <Typography>
            <li>Film Listesi için yapılmış olan demo sayfasıdır.</li>
          </Typography>
        </div>

        <div>
          <h1>ListeFilm </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
