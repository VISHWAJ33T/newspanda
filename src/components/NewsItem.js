// shortcut rce
import { paste } from "@testing-library/user-event/dist/paste";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card-img-top card newsbox">
          <img
            className="newsImg"
            src={
              imageUrl
                ? imageUrl
                : "https://thumbs.dreamstime.com/b/mockup-hot-news-newspaper-blank-empty-space-text-headline-images-isolated-white-background-paper-vintage-gray-155643107.jpg"
            }
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title newsTitle">{title}</h5>
            <p className="card-text newsDescription">{description}...</p>
            <a
              className="badge rounded-pill bg-warning z-1 no-decoration"
              href={newsUrl}
              target="_blank"
            >
              {source}
            </a>
            <p className="card-text">
              <small>
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>{" "}
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
