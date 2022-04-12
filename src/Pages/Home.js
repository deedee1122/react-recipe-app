import React from "react";
import Cards from "../component/Cards";
import Searchbar from "../component/Searchbar";
import Loader from "../component/Loader";

const Home = ({ setQ, result, isLoading }) => {
  let { hits } = result.data || [];
  console.log(hits);

  return (
    <div>
      <h3 className="text-center my-3">Food Recipe</h3>
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
              let idNumber = self?.href
                ?.match(/v2(.*?)type/)[1]
                .slice(1)
                .slice(0, -1);
              return (
                <Cards
                  key={y}
                  label={label}
                  totalTime={totalTime}
                  dishType={dishType}
                  image={image}
                  link={idNumber}
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
