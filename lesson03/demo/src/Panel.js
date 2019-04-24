import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Panel extends Component {
    
    render() {             
        return <div>
            <div>
                {this.props.message}
            </div>
            <button onClick={() => this.props.callback()}>Update</button>
        </div>;
    }
}

Panel.defaultProps = {
    message: "Default message"
}

Panel.propTypes = {
    message: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired    
}

export default Panel;