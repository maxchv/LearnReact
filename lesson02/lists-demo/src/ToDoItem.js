
class ToDoItem {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }

    get Id() {
        return this.id;
    }

    get Text() {
        return this.text;
    }

    toString() {
        return this.text;
    }
}

export default ToDoItem;