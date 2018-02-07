import React, {Component} from 'react';

export default class DiscTabs extends Component {
  render() {
    let tabs = [];
    if(this.props.type === 'movies') {
      tabs = ['NOW PLAYING', 'COMING SOON', 'TOP RATED'];
    } else if(this.props.type === 'tv shows') {
      tabs = ['ON AIR', 'AIRING TODAY', 'TOP RATED'];
    }

    let makeTabs = tabs.map((tab, i) => {
      if(i === 0) {
        return <li key={i} onClick={this.props.handleTabClick} className="active">{tab}</li>
      }
      return <li key={i} onClick={this.props.handleTabClick}>{tab}</li>
    });

    return (
      <div className="disc-tabs">
        <ul className="tabs-ul">
          {makeTabs}
        </ul>
      </div>
    )
  }
}
