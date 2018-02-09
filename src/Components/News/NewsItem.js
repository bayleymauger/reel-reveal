import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';

export default class NewsItem extends Component {
  render() {
    return (
      <div className="news-item">
        <div className="news-img">
          <a href={this.props.link} target="_blank"><img src={this.props.img} alt={this.props.title} /></a>
        </div>
        <div className="news-info">
          <div>
            <p>{ReactHtmlParser(this.props.title)}</p>
          </div>
          <div className="auth-date">
            <p>{this.props.author} {this.props.date.slice(0,10)}</p>
          </div>
        </div>
      </div>
    )
  }
}
