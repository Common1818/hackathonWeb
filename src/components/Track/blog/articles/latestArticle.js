import React from "react";
import moment from 'moment'

const LatestArticle = ({ content }) => {
 
  const article = content[0]
  console.log(moment(article && article.publishedAt).format('DD MMMM YYYY'))

  return (
    <div className="grid__item-lg">
      <a target="_blank" href={article && article.url}>
        <img alt="" src={article && article.urlToImage} className="grid__item__img" />
        <p className="grid__item__category">{moment(article && article.publishedAt).format('DD MMMM YYYY')}</p>
        <h4 className="grid__item__title">{article && article.title}</h4>
        <p className="grid__item__author">By {article && article.author}</p>
      </a>
    </div>
  );
};

export default LatestArticle;
