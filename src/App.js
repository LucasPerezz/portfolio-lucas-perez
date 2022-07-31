import "./App.css";

import Data from "./Components/context/Data.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";

function App() {
  return (
    <>
      <Data>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Data>
    </>
  );
}

export default App;
