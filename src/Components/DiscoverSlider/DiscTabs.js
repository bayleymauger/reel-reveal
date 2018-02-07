import React, {Component} from 'react';

export default class DiscTabs extends Component {
  render() {
    const tabs = ['NOW PLAYING', 'COMING SOON', 'TOP RATED'];
    let makeTabs = tabs.map((tab, i) => {
      if(i === 0) {
        return <li key={i} onClick={this.props.handleTabClick} className="active">{tab}</li>
      }
      return <li key={i} onClick={this.props.handleTabClick}>{tab}</li>
    });
    return (
      <div className="disc-tabs">
        <ul>
          {makeTabs}
        </ul>
      </div>
    )
  }
}
