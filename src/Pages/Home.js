import React from "react";
import Cards from "../component/Cards";
import Searchbar from "../component/Searchbar";
import Loader from "../component/Loader";

const Home = ({ setQ, result, isLoading }) => {
  let { hits } = result.data || [];
  console.log(hits);

  return (
    <div>
      <h3 className="text-center my-3">Food Database</h3>
      <style jsx-="true">
        {`
          .grid{
            display:grid;
            grid-template-columns: repeat(4,1fr);
            gap:15px
          }
          `}
      </style>

      <Searchbar setQ={setQ} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mt-4">
          <div className="grid">
            {hits?.map((data, y) => {
              let { label, totalTime, dishType, image, cuisineType } =
                data?.recipe || [];
              let { self } = data?._links || [];
              let url =
                "https://api.edamam.com/api/recipes/v2/b79327d05b8e5b838ad6cfd9576b30b6?type=public&app_id=093e738d&app_key=1bc8cecb606b726eeef06d2c02d13149";
              let expression1 = /v2\/(.*)/;
              let expression2 = /.*?type(.*?)/g;
              // console.log(url.match(expression1)[1]);
              console.log(url.match(expression1)[0]);
              return (
                <Cards
                  key={y}
                  label={label}
                  totalTime={totalTime}
                  dishType={dishType}
                  image={image}
                  link={self?.href}
                  cuisineType={cuisineType}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
