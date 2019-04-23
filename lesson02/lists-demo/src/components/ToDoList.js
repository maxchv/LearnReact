import React, {Component} from 'react';
import ListItem from './ListItem';
import ToDoItem from '../ToDoItem';
import './ToDoList.css';
// import ApiComponent from './ApiComponent';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [new ToDoItem(1, "first item"),],
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(i) {
        console.log('delete item by: ' + i);
        // TODO: закончить пример - удалить єлемент списка
    }

    addItem() {
        let text = document.querySelector("#text").value;
        console.log("Add item: " + text);
        let id = this.state.items.length + 1;
        let item = new ToDoItem(id, text);
        this.state.items.push(item);
        this.setState({
            items: this.state.items,
        })
        console.log(this.state.items);
    }

    render() {
        return (
            <div>
                {/* <ApiComponent /> */}
                <h2>ToDoList</h2>
                <div>
                    <input id='text'/>
                    <button onClick={this.addItem}>Add</button>
                </div>
                <table className='ToDoList'>
                    <tbody>
                        {this.state.items.map((item, i) => 
                                <ListItem callback={this.deleteItem} key={i} item={item}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ToDoList;
