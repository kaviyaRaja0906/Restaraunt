import React from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./Home";
import Thanks from "./Thanks";

function App(){
    return(
     <div>
       <Router>
        <div>
         <Routes>
          <Route exact path='/' element={<Home />}  />
          <Route exact path='/thanks' element={<Thanks/>}  />
          </Routes>
           </div>
        </Router>     
        </div>
    );
}

export default App;