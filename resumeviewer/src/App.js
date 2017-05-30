import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeDate:{}
    }
  }

  getResumeData(){
    $.ajax({
      url:'http://localhost:3000/resumeData.json',
      dataType:'json',
      cache:'false',
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (

        <div className="App">
          {this.state.resumeData &&
            <div>
              <Header data={this.state.resumeData} />
              <About />
              <Resume />
              <Portfolio />
              <Testimonials />
              <Contact />
              <Footer />
            </div>
          }
        </div>

    );
  }
}

export default App;
