import React, { useState } from "react";
import "./App.css";
// npm install react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom"; //agar Link use kr rhe hote to curly brackets me Link bhi dalna padta
import NavBar from "./components/NavBar";
import News from "./components/News";
// npm install --save react-top-loading-bar
// import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  const [progress, setProgress] = useState(0);
  // const pageSize = 15;
  // const country = "in";
  // const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  return (
    <div className='news-body'>
      <BrowserRouter>
        <NavBar />
        {/* <LoadingBar color="#00d7c3" progress={progress} height={3} /> */}
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                // apiKey={apiKey}
                key="general"
                // pageSize={pageSize}
                // country={country}
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                // apiKey={apiKey}
                key="business"
                // pageSize={pageSize}
                // country={country}
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                // apiKey={apiKey}
                // pageSize={pageSize}
                // country={country}
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                // apiKey={apiKey}
                // pageSize={pageSize}
                // country={country}
                key="health"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                // apiKey={apiKey}
                // pageSize={pageSize}
                // country={country}
                key="science"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                // apiKey={apiKey}
                // pageSize={pageSize}
                // country={country}
                key="sports"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                // apiKey={apiKey}
                // pageSize={pageSize}
                // country={country}
                key="technology"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
