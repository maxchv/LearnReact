import React, {Component} from 'react';
import img from './cross.png';
import "./ListItem.css";

class ListItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.Id}</td>
                <td contentEditable>{this.props.item.Text}</td>
                <td><img className='delete' 
                         onClick={() => this.props.callback(this.props.key)}
                         src={img} width='24' alt="delete item"/></td>
            </tr>
        );
    }
}

export default ListItem;