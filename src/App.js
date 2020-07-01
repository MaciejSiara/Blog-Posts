import React from "react";
import Blog from "./containers/Blog";
import { BrowserRouter } from "react-router-dom";

import "./styles/App.scss";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Blog />
         </div>
      </BrowserRouter>
   );
}

export default App;
