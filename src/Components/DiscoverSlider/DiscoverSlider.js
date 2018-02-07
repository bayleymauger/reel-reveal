import React, {Component} from 'react';
import MovieItem from '../HeroSlider/MovieItem';
import DiscTabs from './DiscTabs';
import Slider from 'react-slick';

export default class DiscoverSlider extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: '',
    }
  }

  componentDidMount() {
    if(this.props.type === 'movies') {
      this.setState({currentTab: 'nowPlaying'});
    } else if(this.props.type === 'tv shows') {
      this.setState({currentTab: 'onAir'});
    }
  }

  camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }

  handleTabClick = (e) => {
    e.target.parentElement.querySelectorAll('.active').forEach(i => {
      i.classList.remove('active');
    });
    e.target.classList.add('active');
    this.setState({currentTab: this.camelize(e.target.textContent.toLowerCase())});
  }

  next() {
    this.slider.slickNext();
  }

  render() {
    setTimeout(() => {
      this.next();
    }, 1000)

    var settings = {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      infinite: true,
    }

    const {currentTab} = this.state;
    const renderSlides = () => {
      if(currentTab === 'nowPlaying') {
        return this.props.nowPlaying.map((movie, i) => {
          return <div key={i}><MovieItem title={movie.original_title} poster={movie.poster_path} vote={movie.vote_average} /></div>
        });
      } else if(currentTab === 'comingSoon') {
        return this.props.comingSoon.map((movie, i) => {
          return <div key={i}><MovieItem title={movie.original_title} poster={movie.poster_path} vote={movie.vote_average} /></div>
        });
      } else if(this.props.type === 'movies' && currentTab === 'topRated') {
        return this.props.topRated.map((movie, i) => {
          return <div key={i}><MovieItem title={movie.original_title} poster={movie.poster_path} vote={movie.vote_average} /></div>
        });
      } else if(currentTab === 'onAir') {
        return this.props.onAir.map((movie, i) => {
          return <div key={i}><MovieItem title={movie.name} poster={movie.poster_path} vote={movie.vote_average} /></div>
        });
      } else if(currentTab === 'airingToday') {
        return this.props.airToday.map((movie, i) => {
          return <div key={i}><MovieItem title={movie.name} poster={movie.poster_path} vote={movie.vote_average} /></div>
        });
      } else if(this.props.type === 'tv shows' && currentTab === 'topRated') {
        return this.props.topRated.map((movie, i) => {
          return <div key={i}><MovieItem title={movie.name} poster={movie.poster_path} vote={movie.vote_average} /></div>
        });
      }
    }

    return (
      <div className="discover-slider">
        <h4>{this.props.type.toUpperCase()}</h4>
        <DiscTabs handleTabClick={this.handleTabClick} type={this.props.type}/>
        <Slider ref={c => this.slider = c } {...settings}>
          {renderSlides()}
        </Slider>
      </div>
    )
  }
}
