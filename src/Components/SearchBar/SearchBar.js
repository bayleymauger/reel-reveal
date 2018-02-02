import React, {Component} from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="top-search">
        <select>
          <option>MOVIES</option>
          <option>TV SHOWS</option>
        </select>
        <i className="fa fa-angle-down"></i>
        <input type="text" placeholder="Search for a movie or TV Show that you are looking for"></input><a href="javascript:$('form').submit();"><i className="fa fa-search"></i></a>
      </div>
    )
  }
}
