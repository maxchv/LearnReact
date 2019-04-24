import React from 'react';
import './App.css';
import Panel from './Panel';
import About from './About';
import {Link, Route} from 'react-router-dom';

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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>    
        <Route path="/" exact={true}
                render={() => (<Panel callback={this.updateMessage} message={this.state.message} />)}/>
        <Route path="/About"
               component={About} />
      </div>
    );
  }
}

export default App;
