import React, { Component } from 'react';
import Profile from '../../images/default_profile.png';
import StaffList from './StaffList';

const arr = [...Array(3).keys()];

class StaffLists extends Component {
  render() {
    const staffs = this.props.staffs;
    const keys = Object.keys(this.props.staffs);
    return (
      <div>
        <ul>
          {
            keys.map(i => {
              return (
                <StaffList key={i}>
                  <h3>{staffs[i].title}</h3>
                  <p>{staffs[i].description}</p>
                </StaffList>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default StaffLists;