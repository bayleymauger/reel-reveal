import React, {Component} from 'react';
import MovieItem from './MovieItem';
import Slider from 'react-slick';

export default class MovieSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false } }, { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } }],
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: false
    };

    var style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

    let popular = this.props.popular.map((movie, i) => {
      return <div key={i} style={style}><MovieItem title={movie.original_title} poster={movie.poster_path} vote={movie.vote_average} /></div>
    })
    return (
      <div className="hero-slider">
        <Slider {...settings}>
          {popular}
        </Slider>
      </div>
    )
  }
}
