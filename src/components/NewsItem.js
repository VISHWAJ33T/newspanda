// shortcut rce
import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl,newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: `18rem` }}>
          <img src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/b/mockup-hot-news-newspaper-blank-empty-space-text-headline-images-isolated-white-background-paper-vintage-gray-155643107.jpg"} className="card-img-top"  alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
