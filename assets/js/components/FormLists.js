import React, { Component } from 'react';
import Profile from '../../images/default_profile.png';
import StaffList from './StaffList';
import RemoveImg from '../../images/x_mark.svg';

class FormLists extends Component {
  handleChange(staffId, updateKey, e) {
    const newValue = e.target.value;
    
    this.props.updateManager(staffId, updateKey, newValue);
  }

  handleRemove(staffId, e) {
    e.preventDefault();
    this.props.removeManager(staffId);
  }
  
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
                  <input type="text" 
                    value={staffs[i].title} 
                    onChange={(e) => this.handleChange(i, "title", e)} 
                  />
                  <textarea 
                    value={staffs[i].description} 
                    onChange={(e) => this.handleChange(i, "description", e)} 
                  />
                  <a className="modify" href="#" onClick={(e) => this.handleRemove(i, e)}>
                    <img src={RemoveImg} />
                    REMOVE MANAGER
                  </a>
                </StaffList>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default FormLists;