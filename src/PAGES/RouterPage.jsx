import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonAppBar from "../COMPONENTS/AppBar";
import OutlinedCard from "../COMPONENTS/Card";

import HomePage  from "./HomePage";
import SearchPage from "./SearchPage";

import "../TemplateCss.css";
import Footer from "../COMPONENTS/Footer";

function RouterPage(props) {
  return (
    <>
      <Router>
        <div class="AppBar">
        <ButtonAppBar/>
        </div>

        <div class="Page">
          <div class="Content">
            <div class="Center">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        <Routes>
          <Route path="/Anasayfa" element={<HomePage />} />
        </Routes>

        <Routes>
          <Route path="/Arama" element={<SearchPage/>} />
        </Routes>

        <Routes>
          <Route path="/dev" element={<OutlinedCard />} />
        </Routes>
            </div>

        <div class="Footer">
        <Footer />
        </div>
        
          </div>
        </div>
      </Router>
    </>
  );
}


export default RouterPage;



