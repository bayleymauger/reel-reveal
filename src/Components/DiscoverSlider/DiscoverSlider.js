import React, {Component} from 'react';
import MovieItem from '../HeroSlider/MovieItem';
import Slider from 'react-slick';

export default class DiscoverSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 8000,
      arrows: false
    }

    var style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

    let nowPlaying = this.props.nowPlaying.map((movie, i) => {
      return <div key={i} style={style}><MovieItem title={movie.original_title} poster={movie.poster_path} vote={movie.vote_average} /></div>
    });
    return (
      <div className="discover-slider">
        <h4>{this.props.type.toUpperCase()}</h4>
        <Slider {...settings}>
          {nowPlaying}
        </Slider>
      </div>
    )
  }
}
