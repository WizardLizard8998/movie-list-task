import React from "react";

import ImprovedCard from "../COMPONENTS/ImprovedCard";
import HeaderCard from "../COMPONENTS/HeaderCard";



function ListPage(props) {
  
  return (
    <>
      <div class="ListPageCard">
        <HeaderCard />
      </div>

      <div class="favlist">
        <ImprovedCard />
      </div>
    </>
  );
}

export default ListPage;
