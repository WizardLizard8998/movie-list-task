import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OutlinedCard from "../COMPONENTS/Card";

import HomePage  from "./HomePage";



function RouterPage(props) {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        <Routes>
          <Route path="/dev" element={<OutlinedCard />} />
        </Routes>



      </Router>
    </>
  );
}


export default RouterPage;



