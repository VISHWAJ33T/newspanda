// shortcut rfc
// import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Articles from "./Articles.json";
import NewsItem from "./NewsItem";
// npm i react-infinite-scroll-component
const News = (props) => {
  // const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);
  // const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // const updateNews = async () => {
  //   props.setProgress(10);
  //   const url = `https://newsapi.org/v2/top-headlines?source=bbc-news&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
  //   setLoading(true);
  //   let data = await fetch(url);
  //   props.setProgress(30);
  //   let parsedData = await data.json();
  //   props.setProgress(70);
  //   setLoading(false);
  //   setArticles(parsedData.articles);
  //   setTotalResults(parsedData.totalResults);
  //   setLoading(false);
  //   props.setProgress(100);
  // };

  useEffect(() => {
    props.setProgress(10);
    setLoading(true);
    document.title = `NewsPanda - ${capitalizeFirstLetter(props.category)}`;
    setLoading(false);
    props.setProgress(100);
  }, []);

  // const handlePrevClick = async () => {
  //   setPage(page-1)
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  // setPage(page+1)
  //   updateNews();
  // };

  // const fetchMoreData = async () => {
  //   const url = `https://newsapi.org/v2/top-headlines?source=bbc-news&country=${
  //     props.country
  //   }&category=${props.category}&apiKey=${props.apiKey}&page=${
  //     page + 1
  //   }&pagesize=${props.pageSize}`;
  //   setPage(page + 1);
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   setArticles(articles.concat(parsedData.articles));
  //   setTotalResults(parsedData.totalResults);
  // };

  return (
    <div className="container  pt-1 pb-4 news-container">
      <h2 className="text-center">
        <strong>
          {/* NewsPanda -  */}
          {capitalizeFirstLetter(props.category)} News
        </strong>
      </h2>
      {/* {loading && <Spinner />} */}
      {/* <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      > */}
      <div className="items-container">
        <div className="row row-container">
          {Articles[props.category].map((element) => {
            return (
              <div className="col-lg-4" height="fit-content" key={element.url}>
                {props.setProgress(10) && setLoading(true)}
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
                {props.setProgress(100) && setLoading(false)}
              </div>
            );
          })}
        </div>
      </div>
      {/* </InfiniteScroll> */}
      {/* <div className="container d-flex justify-content-between my-5">
          <button
            disabled={state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
    </div>
  );
};

export default News;
