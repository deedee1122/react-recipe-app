import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Back from "./Back";

const Details = () => {
  let id = useParams("");
  let [result, setResult] = useState([]);

  let base = "https://api.edamam.com/api/recipes/v2";
  let app_id = "093e738d";
  let app_key = "1bc8cecb606b726eeef06d2c02d13149";
  let api = `${base}/${id.id}?type=public&app_id=${app_id}&app_key=${app_key}`;

  useEffect(() => {
    axios
      .get(api)
      .then((res) => setResult(res))
      .catch((err) => console.log(err));
  }, [api]);

  let { recipe } = result.data || [];
  let { image, ingredientLines } = recipe || [];
  console.log(ingredientLines);
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-5">
          <Back />
          <br />
          <img src={image} alt="" className="img-fluid my-4" />
          <h1>Recipe :</h1>
          <ul>
            {ingredientLines?.map((x, y) => {
              return <li key={y}>{x}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
