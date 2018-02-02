import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><a href="/home">HOME</a></li>
            <li><a href="/movies">MOVIES</a></li>
            <li><a href="/tvshows">TV SHOWS</a></li>
          </ul>
        </nav>
        <div className="nav-login">
          <ul>
            <li>HELP</li>
            <li>LOG IN</li>
            <li><button>SIGN UP</button></li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;
