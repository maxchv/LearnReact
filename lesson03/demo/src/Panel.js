import React, {Component} from 'react';

class Panel extends Component {

    constructor() {
        super();
        console.log("Constructor Panel");
        this.state = {
            message: undefined
        };
        this.updateState = this.updateState.bind(this);
        this.outside = true;
    }

    updateState() {
        console.log("updateState");
        this.setState({
            message: `Update at ${new Date().toLocaleTimeString()}`
        });
        this.outside = false;
    }

    componentWillMount(){
        console.log("Will Mount Panel");
    }
    
    componentDidMount() {
        console.log("Did Mount Panel");
    }

    componentWillUpdate() {
        console.log("Will Update Panel");
    }

    componentDidUpdate() {
        console.log("Did Update Panel");
    }

    componentWillUnmount() {
        console.log("Will Unmoun Panel");
    }

    componentWillReceiveProps(oldProps, newProps) {
        console.log("Will Receive Props");
        console.log(oldProps);
        console.log(newProps);   
        this.outside = true;     
    }

    render() {
        console.log(`Render Panel ${this.props.message}`);        
        return <div>
            <div>
                {this.outside ? this.props.message : this.state.message}
            </div>
            <button onClick={this.updateState}>Update Inside</button>
        </div>;
    }
}

export default Panel;