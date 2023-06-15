// shortcut rce
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    // console.log("Hello i am a constructor from newsitems component");
    this.state = { articles: [], loading: false, page: 1 };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?source=bbc-news&country=in&apiKey=ab144d28d55843b795bcc1ce3aac5b5d&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?source=bbc-news&country=in&apiKey=ab144d28d55843b795bcc1ce3aac5b5d&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  
  handleNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?source=bbc-news&country=in&apiKey=ab144d28d55843b795bcc1ce3aac5b5d&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsPanda- Top headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : "No title"}
                description={
                  element.description ? element.description : "No description"
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
            // );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
