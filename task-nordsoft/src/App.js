import React, { Component } from 'react';
import UserRow from './Components/UserRow';
import InputData from './Components/InputData';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: {},
      user: {
        name: '',
        email: '',
        phone: ''
      },
    }
    this.addNewUser = this.addNewUser.bind(this)
    this.updateField = this.updateField.bind(this)
    this.validateInput = this.validateInput.bind(this)
  }

  getUsers() {
    $.ajax({
      url:'http://localhost:3000/emailList.json',
      type: 'GET',
      success:function(data) {
        this.setState({users: data.emailData})
      }.bind(this),
    })
  }

  updateField(e) {
    let user = this.state.user
    user[e.target.name] = e.target.value
    this.setState({user: user})
  }

  validateInput() {
    const user = this.state.user
    if(user.name === '' || user.email === '' || user.phone === '') {
      alert('Required field is missing');
      return;
    }
    else {
      return true;
    }
  }

  addNewUser() {
    this.validateInput()
    if(this.validateInput() === true) {
      let oldUsers = this.state.users
      let user = this.state.user
      oldUsers.push(user)
      this.setState({users: oldUsers})
      user = {
        name: '',
        email: '',
        phone: '',
      }
      alert('New User was added')
      this.setState({user: user})
    }
    else {
      return
    }
  }

  componentDidMount() {
    this.getUsers()
  }

  render() {
    const users = this.state.users
    return (
      <div className="App">
        <div>
          <InputData
            addUser={this.addNewUser}
            user={this.state.user}
            updateValue={this.updateField}
          />
        </div>
        <div>
          <div className="row user-header-info">
            <div className="col-xs-4 col-sm-3">Name<span className="fa fa-arrow-down name-glif" aria-hidden="true"></span></div>
            <div className="col-xs-8 col-sm-4">E-mail address</div>
            <div className="hidden-xs col-sm-3">Phone number</div>
            <div className="hidden-xs col-sm-1"></div>
            <div className="hidden-xs col-sm-1"></div>
          </div>
          {Object.keys(users).map(key => (
            <UserRow name={users[key].name}
                     email={users[key].email}
                     phone={users[key].phone}
                     key={key}
            />
            ))
          }
        </div>

      </div>
    );
  }
}

export default App;
