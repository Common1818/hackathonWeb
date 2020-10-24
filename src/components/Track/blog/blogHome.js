/* eslint-disable */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import NewsletterForm from "./newsletterForm";
import LatestArticle from "./articles/latestArticle";
import FeaturedArticles from "./articles/featuredArticles";
import AllArticles from "./articles/allArticles";
import { getNewsData } from "../../../actions/data";

import "./css/blogHome.css";

const BlogHome = ({ getNewsData, newsArticles, newsLoaded }) => {
  useEffect(() => {
    if (!newsLoaded) {
      getNewsData();
    }
  }, []);

  var content = newsArticles;

  return (
    <div className="content-wrapper">
      <nav className="nav__top">
        <a rel="nofollow" href="#" className="nav__top__link"></a>
      </nav>
      <div className="title">
        <h1 style={{ fontFamily: "Dosis" }} className="title__h1">
          {" "}
          Read Covid News <span></span>
        </h1>
      </div>
      <article className="grid">
        <section className="grid__col-2">
          <LatestArticle content={content} />
          <div>
            <h3 className="grid__col__title">Featured Articles</h3>
            <FeaturedArticles content={content} />
            {/* <NewsletterForm /> */}
          </div>
        </section>
        <h3 className="grid__col__title">Also Read...</h3>
        <AllArticles content={content} />
      </article>
    </div>
  );
};

const mapStateToProps = (state) => ({
  newsArticles: state.covidData.articles,
  newsLoaded: state.covidData.newsLoaded,
});

export default connect(mapStateToProps, { getNewsData })(BlogHome);
