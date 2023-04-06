import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import "../TemplateCss.css";

export default function ButtonAppBar() {


  const history = useNavigate();

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div class="AppBar">
      <AppBar color="inherit" position='static'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => history("/")}
          >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FilmList
          </Typography>
            
          </IconButton>
          <Button color="inherit" onClick={()=> {history("/Anasayfa")}}>Anasayfa</Button>
          <Button color="inherit" onClick={()=> {history("/Liste")}}>Listem</Button>
          <Button color="inherit" onClick={()=> {history("/Arama")}}>Arama</Button>
        </Toolbar>
      </AppBar>
      </div>
    </Box>
  );
}