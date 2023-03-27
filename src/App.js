import DrawerAppBar from "./COMPONENTS/AppBar";
import Footer from "./COMPONENTS/Footer";


import RouterPage from "./PAGES/RouterPage";

import "./TemplateCss.css";

function App() {
  return (
    <>
      <div className="Page">

        <div className="Content">
        <div className="AppBar">
          <DrawerAppBar />
        </div>

        <div className="Center">
          <RouterPage />
        </div>

        <div className="Footer">
          <Footer />
        </div>
        </div>


      </div>
    </>
  );
}

export default App;
