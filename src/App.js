import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  repeatText = (e) => {
    const text = e.target.value;
    this.setState({text})
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.repeatText}/>
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }
}

export default App;
