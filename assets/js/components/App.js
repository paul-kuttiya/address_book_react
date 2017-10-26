import React from 'react';
import Header from './header';
import Modal from './modal';
import StaffLists from './StaffLists';

import '../../css/app.sass';

class App extends React.Component {
  constructor () {
    super();
    
    this.state = {
      modal: false,
      staffs: {
        staff1: {
          title: "title",
          description: "description hahaha"
        }
      },
    }
    
    this.toggleModal = this.toggleModal.bind(this);
    this.addManager = this.addManager.bind(this); 
    this.updateManager = this.updateManager.bind(this);
    this.removeManager = this.removeManager.bind(this);     
    this.setStorage = this.setStorage.bind(this);     
  }
  
  componentDidMount() {
    const staffs = JSON.parse(localStorage.getItem("staffs"));

    this.setState({staffs: staffs});
  }

  toggleModal() {
    const modal = !this.state.modal;
    this.setState({ modal: modal });
  }

  setStorage() {
    const staffs = JSON.stringify(this.state.staffs);
    localStorage.setItem('staffs', staffs);
  }

  addManager() {
    const staffs = this.state.staffs;
    const staff = `staff_${Date.now()}`;

    staffs[staff] = {
      title: "",
      description: ""
    }

    this.setState({
      staffs: this.state.staffs
    });
  }

  removeManager(staffId) {
    const staffs = this.state.staffs;
    
    delete staffs[staffId];

    this.setState({staffs: staffs});
  }

  updateManager(staffId, updateKey, newValue) {
    const staffs = this.state.staffs;
    staffs[staffId][updateKey] = newValue;

    this.setState({staffs: staffs});
  }

  render() {
    return (
    <div>
      <Header toggleModal={this.toggleModal} />
      <Modal 
        staffs={this.state.staffs}
        addManager={this.addManager} 
        updateManager={this.updateManager} 
        toggleModal={this.toggleModal} 
        display={this.state.modal} 
        removeManager={this.removeManager} 
        setStorage={this.setStorage}
      />
      <StaffLists 
        staffs={this.state.staffs}
      />
    </div>
    )
  }
}

export default App;