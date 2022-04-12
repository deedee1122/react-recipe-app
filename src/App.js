import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nutrition from "./Pages/Nutrition";
import Recipe from "./Pages/Recipe";
import Navbar from "./component/Navbar";
import Details from "./component/Details";
import axios from "axios";

function App() {
  let base = "https://api.edamam.com/api/recipes/v2";
  let type = "public";
  let [q, setQ] = useState("chicken");
  let [isLoading, setIsLoading] = useState(false);
  let [result, setResult] = useState([]);
  // console.log(result)
  let app_id = "093e738d";
  let app_key = "1bc8cecb606b726eeef06d2c02d13149";

  let api = `${base}?type=${type}&q=${q}&app_id=${app_id}&app_key=${app_key}`;
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(api)
      .then((res) => setResult(res))
      .then((res) => setIsLoading(false))
      .catch((err) => console.log(err));
  }, [api]);

  //https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=093e738d&app_key=1bc8cecb606b726eeef06d2c02d13149
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home isLoading={isLoading} result={result} setQ={setQ} />}
          />
          <Route
            path="/database/:id"
            element={
              <Details isLoading={isLoading} result={result} setQ={setQ} />
            }
          />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
