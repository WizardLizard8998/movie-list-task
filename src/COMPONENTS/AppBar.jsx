import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {


  const history = useNavigate();

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" position='static'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FilmList
          </Typography>
          <Button color="inherit" onClick={()=> {history("/Anasayfa")}}>Anasayfa</Button>
          <Button color="inherit" onClick={()=> {history("/List")}}>Listem</Button>
          <Button color="inherit" onClick={()=> {history("/Arama")}}>Arama</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}