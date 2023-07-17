// shortcut rce
import React from "react";
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-2" style={{width:"30%",margin:"0 10px"}}>
      <div className="card-img-top card newsbox">
        <img
          className="newsImg"
          src={
            imageUrl
              ? imageUrl
              : "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
          }
          onError={(e) =>
            (
              (e.target.src =
                "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"))
          }
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title newsTitle">{title}</h5>
          <p className="card-text newsDescription">{description}</p>
          <a
            className="badge source rounded-pill bg-warning z-1 no-decoration"
            href={newsUrl}
            target="_blank"
          >
            {source}
          </a>
          <p className="card-text newsAuthor">
            <small>
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>{" "}
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-dark btn-sm readMore"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
