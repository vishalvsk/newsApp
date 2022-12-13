import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

import NewsItem from "./NewsItem";
import { useParams } from "react-router-dom";
import { title, description, apiKey} from "./key.js";



const News = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = useState(false);

  let { news } = useParams();
  console.log(news);
  useEffect(() => {
    if (news === undefined) {
      homeFunc();
    } else {
      console.log(news);
      allFunc();
    }
  }, [news, page]);

  const homeFunc = () => {
    let url = `https://newsdata.io/api/1/news?&language=hi&apikey=${apiKey}&country=in&page=${page}`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((error) => console.log(error))
       .finally(() => setLoading(false))
      
    console.log(data);
  };

  const allFunc = () => {
    let url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in,us,gb,au,pk&category=${news}&page=${page}`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((error) => console.log(error))
    .finally(() => setLoading(false))
   
    console.log(data);
  };

  const nextPage = () => {
    setPage((page) => page + 1);
  };
  const prevPage = () => {
    setPage((page) => page - 1);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{
          margin: "35px 0px",
          marginTop: "90px",
          opacity: "0.5",
          color: "blue",
        }}
      >
        Vishal's News - Top Headlines
      </h1>
     
      {loading === true ? <Spinner /> :
        <>
          <div className="container">
            <div className="row">
              {data.map((element) => {
                return (
                  <div className="col-md-4 mx-auto" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : title}
                      description={
                        element.description ? element.description : description
                      }
                      imageUrl={element.image_url}
                      newsUrl={element.link}
                    />
                  </div>
                );
              })}
            </div>
          {/* </div>
          <div className="d-flex justify-content-around mb-4">
            <button onClick={prevPage} type="button" class="btn btn-dark">
              Previous
            </button>
            <button onClick={nextPage} type="button" class="btn btn-dark">
              Next
            </button>
          </div>
        </>
      }
        </>
         */}
  
  );
};

export default News;
