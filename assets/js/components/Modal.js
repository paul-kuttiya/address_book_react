import React from 'react';
import FormLists from './FormLists';
import Add from '../../images/plus_sign.svg';

class ModalContent extends React.Component  {
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
      <div className="modal-content">
        <span 
          className="close" 
          onClick={this.handleClick}
        >
          &times;
        </span>
        <div className="modal-header">
          <header className="title">
            <h2>Executive Management</h2>
          </header>
        </div>
        <Form 
          {...this.props} 
          toggleModal={this.props.toggleModal} 
        />
      </div>
    )
  }
}

class Form extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.setStorage();
    this.props.toggleModal();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormLists {...this.props} />
        <FormSubmit {...this.props} />
      </form>
    )
  }
}

class FormSubmit extends React.Component {
  constructor() {
    super();

    this.handleCancel = this.handleCancel.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.toggleModal();
  }

  handleAdd(e) {
    e.preventDefault();
    this.props.addManager();
  }
  
  render() {
    return (
      <div className="submit">
        <a className="modify" href="#" onClick={this.handleAdd}>
          <img src={Add} />
          ADD NEW MANAGER
        </a>
        <button type="submit" className="save">Save</button>
        <button className="cancel" onClick={this.handleCancel}>Cancel</button>      
      </div>
    )
  }
}

class Modal extends React.Component {
  render() {
    const display =  !!this.props.display ? 'block' : 'none'; 

    return (
      <div className="modal" style={{display: display}}>
        <ModalContent 
          toggleModal={this.props.toggleModal}
          display={this.props.display} 
          {...this.props}
        />
      </div>
    )
  }
}

export default Modal;