import React from "react";
import moment from 'moment'


const FeaturedArticles = ({ content }) => {
   const articles = content.slice(1,3)
  return (
    <div>
      {articles &&
        articles.map((article) => {
            
            return (
              <div className="grid__item-sm" >
                <a target="_blank" href={article && article.url}>
                  <div>
                    <p className="grid__item__category">
                     {moment(article && article.publishedAt).format('DD MMMM YYYY')}
                    </p>
                    <h4 className="grid__item__title">
                  {article && article.title}
                    </h4>
                    <br />
                    <br />
                    <p className="grid__item__author">
                      By {article && article.author}
                    </p>
                  </div>
                  <div>
                    <img
                      src={article && article.urlToImage} 
                      alt=""
                      className="grid__item__img"
                    />
                  </div>
                </a>
              </div>
            );
         
        })}
    </div>
  );
};

export default FeaturedArticles;
