import React from 'react';
import PencilSvg from '../../images/pencil.svg'; 

class Header extends React.Component {
  constructor() {
    super();
    
    this.handleClick = this.handleClick.bind(this);
  }  

  handleClick(e) {
    e.preventDefault();

    this.props.toggleModal();
  }

  render() {
    return (
      <div className="header">
        <h2>Executive Managment</h2>
        <a className="add" href="#" onClick={this.handleClick}>
          <img src={PencilSvg} /> Edit
        </a>
      </div>
    )
  }
}

export default Header