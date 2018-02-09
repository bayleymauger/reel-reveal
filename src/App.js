import React, { Component } from 'react';
import Header from './Components/Header/Header';
import HeroSlider from './Components/HeroSlider/HeroSlider';
import SeachBar from './Components/SearchBar/SearchBar';
import News from './Components/News/News';
import DiscoverSlider from './Components/DiscoverSlider/DiscoverSlider';

class App extends Component {
  constructor() {
    super()
    this.state = {
      mPopular: [],
      mNowPlaying: [],
      mComingSoon: [],
      mTopRated: [],
      tOnAir: [],
      tAirToday: [],
      tTopRated: [],
      news: []
    }
  }

  componentDidMount() {
    let getData = (url, stateObj) => {
      fetch(url).then(res => {return res.json()}).then(res => {this.setState({[stateObj]: res.results})});
    }
    // MOVIES
    getData('https://api.themoviedb.org/3/movie/popular?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1', 'mPopular');
    getData('https://api.themoviedb.org/3/movie/now_playing?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1', 'mNowPlaying');
    getData('https://api.themoviedb.org/3/movie/upcoming?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1','mComingSoon');
    getData('https://api.themoviedb.org/3/movie/top_rated?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1','mTopRated');
    // TV SHOWS
    getData('https://api.themoviedb.org/3/tv/on_the_air?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1', 'tOnAir');
    getData('https://api.themoviedb.org/3/tv/airing_today?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1', 'tAirToday');
    getData('https://api.themoviedb.org/3/tv/top_rated?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1','tTopRated');
    // NEWS
    fetch('https://newsapi.org/v2/top-headlines?sources=entertainment-weekly&apiKey=94d4df4aa6f64c6aaf367aa821ccde0c').then(res => res.json()).then(response => this.setState({news: response.articles}));

    setTimeout(() => {
      document.getElementById("loader").style.display = 'none';
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <div id="loader">
          <div className="l1"><div className="l2"></div></div>
        </div>
        <section className="hero-section">
          <div className="content-wrapper">
            <Header />
            <SeachBar />
            <HeroSlider popular={this.state.mPopular} />
          </div>
        </section>
        <section className="discover-section">
          <div className="content-wrapper">
            <div className="inner-disc">
              <div className="slider-wrapper">
                <DiscoverSlider type="movies" nowPlaying={this.state.mNowPlaying} comingSoon={this.state.mComingSoon} topRated={this.state.mTopRated} />
                <DiscoverSlider type="tv shows" onAir={this.state.tOnAir} airToday={this.state.tAirToday} topRated={this.state.tTopRated} />
              </div>
              <News news={this.state.news}/>
            </div>
          </div>
        </section>
        <section className="trailer-section">
          <div className="content-wrapper">

          </div>
        </section>
      </div>
    );
  }
}

export default App;
