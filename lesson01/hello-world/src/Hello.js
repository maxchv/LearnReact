import React, {Component} from 'react';

class Hello extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.countUp = this.countUp.bind(this);
    }

    countUp() {
        console.log(this);
        this.setState({count: this.state.count + 1});
    }
    
    render() {        
        return (<main>
            <h1>            
                {this.props.message}
            </h1>
            <div>Count: {this.state.count}</div>
            <button onClick={this.countUp}>Up</button>
        </main>);
    }
}

export default Hello;
