import React, { Component } from 'react';
import Header from './Components/Header/Header';
import HeroSlider from './Components/HeroSlider/HeroSlider';
import SeachBar from './Components/SearchBar/SearchBar';
import DiscoverSlider from './Components/DiscoverSlider/DiscoverSlider';

class App extends Component {
  constructor() {
    super()
    this.state = {
      popular: [],
      nowPlaying: [],
    }
  }

  componentDidMount() {
    // POPULAR
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1').then(res => {return res.json()}).then(response => {this.setState({popular: response.results})});

    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=1208e42d5f9244b06b09af5465f9e155&language=en-US&page=1').then(res => {return res.json()}).then(response => this.setState({...this.state, nowPlaying: response.results}));
  }

  render() {
    return (
      <div className="App">
        <section className="hero-section">
          <div className="content-wrapper">
            <Header />
            <SeachBar />
            <HeroSlider popular={this.state.popular} />
          </div>
        </section>
        <section className="discover-section">
          <div className="content-wrapper">
            <DiscoverSlider type="movie" nowPlaying={this.state.nowPlaying} />                     
          </div>
        </section>
      </div>
    );
  }
}

export default App;
