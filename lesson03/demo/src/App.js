import React from 'react';
import './App.css';
import Panel from './Panel';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };

    this.updateMessage = this.updateMessage.bind(this);
  }

  updateMessage() {
    this.setState({
      message: `New message ${new Date().toLocaleTimeString()}`
    });
  }

  render() {
    return (
      <div className="App">      
        <Panel callback={this.updateMessage} message={this.state.message} />             
      </div>
    );
  }
}

export default App;
