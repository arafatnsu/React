import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      count: 0
    }
    this.updateMyState = this.updateMyState.bind(this)
    this.forceUpdateRandomNumber = this.forceUpdateRandomNumber.bind(this)
    this.findMyDomNode = this.findMyDomNode.bind(this)
  }

  findMyDomNode() {
    var myDiv = document.getElementById('myDiv')
    ReactDOM.findDOMNode(myDiv).style.color = 'blue'
  }

  forceUpdateRandomNumber() {
    this.forceUpdate()
  }

  updateMyState() {
    var count = this.state.count
    count++
    var item = "click-"+count+" "
    var myArray = this.state.data
    myArray.push(item)
    this.setState({data: myArray, count: count})
  }

  render() {
    return (
      <div className="App">
        <h1>Random Practice</h1>
        <button onClick={this.updateMyState}>Click Me</button>
        <h4>Staate Data: {this.state.data}</h4>
        <button onClick={this.forceUpdateRandomNumber}>Random Number</button>
        <h4>Random Number: {Math.random() * 100}</h4>
        <button onClick={this.findMyDomNode}>Find My DOM Node</button>
        <div id="myDiv">This is my DIV</div>

      </div>
    );
  }
}

export default App;
