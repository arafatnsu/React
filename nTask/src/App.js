import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import UserRow from './Components/UserRow';
import RequestData from './Components/RequestData'
class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        users: {}
      }
    }

    getUsers() {
      $.ajax({
        url:'http://localhost:3000/emailList.json',
        type: 'GET',
        success: function(data) {
          this.setState({users: data.emailData})
        }.bind(this),
        error: function(err) {
          console.log(err)
        }
      })
    }

    componentDidMount() {
      this.getUsers()
    }
render() {
   const users = this.state.users
    return (
      <div className="App">
        <div className="row header-row">
          <div className="col-xs-4 col-sm-3">
            <h5>Name</h5>
          </div>
          <div className="col-xs-8 col-sm-4">
            <h5>Email</h5>
          </div>
          <div className="hidden-xs col-sm-3">
            <h5>Phone</h5>
          </div>
          <div className="hidden-xs col-sm-1">
            <h5>Edit</h5>
          </div>
          <div className="hidden-xs col-sm-1">
            <h5>Delete</h5>
          </div>
        </div>
          <div>
            {!users &&
              <RequestData />
            }
          </div>
          <div>
          {users &&
            Object.keys(users).map(key => (
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
