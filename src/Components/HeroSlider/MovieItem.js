import React, {Component} from 'react';

export default class MovieItem extends Component {
  render() {
    const posterURL = "https://image.tmdb.org/t/p/w500";
    return (
      <div className="movie-item">
        <div className="movie-img">
          <img src={posterURL + this.props.poster} alt={this.props.title + " movie poster"} />
        </div>
        <div className="movie-info">
          <div className="movie-cat"></div>
          <h6>{this.props.title}</h6>
          <p><i className="fa fa-star"></i> <span className="movie-rating">{this.props.vote}</span>/10</p>
        </div>
      </div>
    )
  }
}
