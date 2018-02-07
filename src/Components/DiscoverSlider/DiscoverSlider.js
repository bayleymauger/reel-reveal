import React, {Component} from 'react';
import MovieItem from '../HeroSlider/MovieItem';
import DiscTabs from './DiscTabs';
import Slider from 'react-slick';

export default class DiscoverSlider extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: 'nowPlaying',
    }
  }

  handleTabClick = (e) => {
    e.target.parentElement.querySelectorAll('.active').forEach(i => {
      i.classList.remove('active');
    });
    e.target.classList.add('active');
    this.setState({currentTab: e.target.textContent});
  }

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

    function camelize(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
      }).replace(/\s+/g, '');
    }

    var style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

    const renderSlides = (tab) => {
      return this.props.tab.map((movie, i) => {
        return <div key={i} style={style}><MovieItem title={movie.original_title} poster={movie.poster_path} vote={movie.vote_average} /></div>
      });
    }

    return (
      <div className="discover-slider">
        <h4>{this.props.type.toUpperCase()}</h4>
        <DiscTabs handleTabClick={this.handleTabClick} />
        <Slider {...settings}>
          {renderSlides(camelize(this.state.currentTab))}
        </Slider>
      </div>
    )
  }
}
