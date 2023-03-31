import { createContext, useState } from "react";
import React from "react";

const UserDataContext = createContext();

function UserDataProvider(props) {
  const [userid, setuserid] = useState("");

  return (
    <UserDataContext.Provider
      value={{
        userid: userid ,
        setuserid,
      }}
    >
      {props.children}
    </UserDataContext.Provider>
  );
}

export  {UserDataContext, UserDataProvider} ; 