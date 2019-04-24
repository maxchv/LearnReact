import React from 'react';
import './App.css';
import Panel from './Panel';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Panel"
    };

    this.updateMessage = this.updateMessage.bind(this);
  }

  updateMessage() {
    this.setState({
      message: "New message"
    });
  }

  render() {
    return (
      <div className="App">      
        <Panel message={this.state.message} />      
        <button onClick={this.updateMessage}>Update Outside</button>
      </div>
    );
  }
}

export default App;
