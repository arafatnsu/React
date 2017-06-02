import React, { Component } from 'react';
import UserRow from './Components/UserRow';
import InputData from './Components/InputData';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }

  getUsers() {
    $.ajax({
      url:'http://localhost:3000/emailList.json',
      type: 'GET',
      success:function(data) {
        this.setState({user: data.emailData})
      }.bind(this),
    })
  }

  componentDidMount() {
    this.getUsers()
  }

  render() {
    const users = this.state.user
    return (
      <div className="App">
        <div>
          <InputData />
        </div>
        <div>
          <div className="row user-header-info">
            <div className="col-xs-4 col-sm-3">Name</div>
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
