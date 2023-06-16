// shortcut rce
import PropTypes from 'prop-types';
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
export class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize:9,
    category: "general",
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor() {
    super();
    // console.log("Hello i am a constructor from newsitems component");
    this.state = { articles: [], loading: false, page: 1 };
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?source=bbc-news&country=${this.props.country}&category=${this.props.category}&apiKey=e5be9cd7182743d891a472ccfa111940&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading: false});
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews()
  }

  handlePrevClick = async () => {
    this.setState({page:this.state.page - 1})
    this.updateNews()
  };
  
  handleNextClick = async () => {
    this.setState({page:this.state.page + 1})
    this.updateNews()
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsPanda- Top headlines</h1>
          {this.state.loading&&<Spinner/>}
        <div className="row">
          {!this.state.loading&&this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : "No title"}
                  description={
                    element.description ? element.description : "No description"
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
          {/* {this.state.loading&&<Spinner/>} */}
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
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
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
