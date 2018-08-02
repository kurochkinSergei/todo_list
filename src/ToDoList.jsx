import React, {Component} from 'react';

class ToDoList extends Component {
    render() {
        return (
            <div className="todoListWrapper">
                <form>
                    <input placeholder="Enter a task"/>
                    <button type="submit">add</button>       
                </form>
            </div>
        )
    }
}

export default ToDoList;