import React, {Component} from 'react';

class ApiComponent extends Component {
    constructor(props) {
        super(props);

        this.request = this.request.bind(this);
    }

    request() {
        const ep = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=d50e484e963eb11ec4976c3fcb7db26a&format=json";
        fetch(ep).then((response) => response.json())
                 .then((json) => console.log(json))
                 .catch((err) => console.error(err));
    }

    render() {
        return (<div>
                <h1>Api demo</h1>
                <button onClick={this.request}>Get</button>
            </div>
        );
    }
}

export default ApiComponent;