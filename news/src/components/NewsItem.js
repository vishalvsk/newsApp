import React from "react";
import { img } from "./key.js";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl } = props;
  return (
    <div className="my-3">
      <div  className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
                      right: "0",
                      height: "500px",
            borderradius: "25px"
          }}
        >
          {/* <span className="badge rounded-pill bg-danger"> {source} </span> */}
        </div>
        <img
          style={{ height: "300px" }}
          src={imageUrl ? imageUrl : img}
          className="card-img-top "
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 100)}... </h5>
          <p className="card-text">{description.slice(0, 150)}...</p>

          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark text-center"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
