import React, { Component } from 'react';
import Profile from '../../images/default_profile.png';

class StaffList extends Component {
  render() {
    return (
      <li className="lists-container">
        <div className="image-wrap">
          <img src={Profile} />
        </div>
        <div className="list-content">
          {this.props.children}
        </div>
      </li>
    )
  }
}

export default StaffList;