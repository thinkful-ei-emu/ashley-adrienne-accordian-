import React, { Component } from 'react';
import Accordian from './state-drills/accordian';

class App extends Component {
  static defaultProps ={
    sections: [{title, content}]
  }


  render() {
    

    return (
      <div className="App">
        <Accordian />
        
      </div>
    );
  }
}

export default App;