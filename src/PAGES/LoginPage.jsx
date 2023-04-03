import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";

import "../TemplateCss.css";

import { useNavigate } from "react-router-dom";

import { UserList } from "../DATA/UserList";
import {UserData} from "../DATA/UserData"

import { UserDataContext } from "../DATA/DataContext";

function LoginPage(props) {
  const history = useNavigate();
  const users = UserList;

  const {userId, setuserid} = useContext(UserDataContext);

  const [uname, setUname] = React.useState("");
  const [pass, setPass] = React.useState("");
  
  console.log(users)

  useEffect(() => {


    if (
      localStorage.getItem("UserData") == null 
      
      ) {
        localStorage.setItem("UserData", JSON.stringify(UserData));
      }
  
    
    if (
      localStorage.getItem("user") == null 
      
      ) {
        localStorage.setItem("user", JSON.stringify(users));
        
        
      
      
      }
      
    }, [])
  
  const checkLogin = () => {
    console.log(uname + " " + pass);

    users &&
      users.map((data, index) => {
        if (data.userName === uname && data.userPwd === pass) {
          history("/Anasayfa");
          setuserid(data.userId);
        } else {
          alert("yanlış parola // şifre ");
        }
      });
  };

  return (
    <>
      <Box className="LoginBox">
        <TextField
          variant="standard"
          label="kullanıcı ismi"
          onChange={(event) => {
            setUname(event.target.value);
          }}
        />
        <TextField
          variant="standard"
          label="parola"
          type="password"
          onChange={(event) => {
            setPass(event.target.value);
          }}
        />
        <Button onClick={checkLogin}> Giriş Yap</Button>
      </Box>
    </>
  );
}

export default LoginPage;
