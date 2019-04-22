import React, {Component} from 'react';
import './App.css';
import Hello from  './Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello message="Hello React" />
      </div>
    );
  }
}

export default App;
