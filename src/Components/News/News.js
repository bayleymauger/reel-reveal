import React, {Component} from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  render() {
    let makeNews = this.props.news.splice(0,3).map((news, i) => {
      return <NewsItem key={i} img={news.urlToImage} title={news.title} author={news.author} date={news.publishedAt} link={news.url} />
    });
    return (
      <div className="news-section">
        <h4>LATEST NEWS</h4>
        <hr></hr>
        {makeNews}
      </div>
    )
  }
}
