import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


function HeaderCard() {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Listenize Hoş Geldiniz!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Listelerinize göz atın, favorilerinizi düzenleyin veya da izleme
            geçmişinizi görüntüleyin.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default HeaderCard;
