import React, {Component} from 'react';

class ToDoList extends Component {
    constructor (props) {
        super(props)

        this.state = {
            tasks: []
        }

        this.newTask = this.newTask.bind(this)
    }
    
    newTask(e) {
        e.preventDefault()

        if (this._titleInput.value) {
            var task = {
                key: Date.now(),
                title: this._titleInput.value
            }

            this.setState((prevState) => {
                return { 
                    tasks: prevState.tasks.concat(task)
                }
            })

            console.log(this.state.tasks)
        }
        
        this._titleInput.value = ""
    }

    render() {
        return (
            <div className="todo-list">
                <form className="new-task" onSubmit={this.newTask}>
                    <input ref={(a) => this._titleInput = a} className="title-input" placeholder="Enter a task title"/>
                    
                    {/*TODO button as component */}
                    <button className="submit-task-button" type="submit">+</button>     
                </form>

            </div>
        )
    }
}

export default ToDoList;