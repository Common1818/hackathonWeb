import React from "react";
import moment from 'moment'

const AllArticles = ({ content }) => {
  const articles = content.slice(3,15);

  return (
    <section className="grid__col-3">
      {articles &&
        articles.map((article) => {
          return (
            <div className="grid__item-md" >
              <a target="_blank" href={article && article.url}>
                <img
                  alt=""
               src={article && article.urlToImage} 
                  className="grid__item__img"
                />
                <p className="grid__item__category">
                  {" "}
                  {moment(article && article.publishedAt).format('DD MMMM YYYY')}
                </p>
                <h4 className="grid__item__title">{article && article.title}</h4>
                <p className="grid__item__author">
                  {" "}
                  By {article && article.author}
                </p>
              </a>
            </div>
          );
        })}
    </section>
  );
};

export default AllArticles;
