// shortcut rce
import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
export class News extends Component {
  // used to set the value type of props so that no other type of data is passed to it
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  // set the initial values of props
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  
  capitalizeFirstLetter = (string)=> {
return string.charAt(0).toUpperCase()+ string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = { articles: [], loading: false, page: 1 };
    document.title = `NewsPanda - ${this.capitalizeFirstLetter(this.props.category)}`
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?source=bbc-news&country=${this.props.country}&category=${this.props.category}&apiKey=ccc7f8077bb6425880399779c0eee196&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">
          <b>NewsPanda - {this.capitalizeFirstLetter(this.props.category)} News</b>
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : "No title"}
                    description={
                      element.description
                        ? element.description
                        : "No description"
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-5">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
