import React, { Component } from 'react';
import Header from './Components/Header/Header';
import HeroSlider from './Components/HeroSlider/HeroSlider';
import SeachBar from './Components/SearchBar/SearchBar';
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
      tTopRated: []
    }
  }

  componentDidMount() {
    // MOVIES //
    // POPULAR
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1').then(res => {return res.json()}).then(response => {this.setState({mPopular: response.results})});
    // NOW PLAYING
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1').then(res => {return res.json()}).then(response => this.setState({...this.state, mNowPlaying: response.results}));
    // COMING SOON
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1').then(res => {return res.json()}).then(response => this.setState({...this.state, mComingSoon: response.results}));
    // TOP RATED
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1').then(res => {return res.json()}).then(response => this.setState({...this.state, mTopRated: response.results}));

    // TV SHOWS
    // ON AIR
    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1').then(res => {return res.json()}).then(response => this.setState({tOnAir: response.results}));
    // AIRING TODAY
    fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1').then(res => {return res.json()}).then(response => this.setState({tAirToday: response.results}));
    // TOP RATED
    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1').then(res => {return res.json()}).then(response => this.setState({tTopRated: response.results}));

    setTimeout(() => {
      document.getElementById("loader").style.display = 'none';
    }, 1500);
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
            <DiscoverSlider type="movies" nowPlaying={this.state.mNowPlaying} comingSoon={this.state.mComingSoon} topRated={this.state.mTopRated} />
            <DiscoverSlider type="tv shows" onAir={this.state.tOnAir} airToday={this.state.tAirToday} topRated={this.state.tTopRated} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
