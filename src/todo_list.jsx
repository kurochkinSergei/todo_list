import React, {Component} from 'react'
import TitleInput from './title_input'
import Button from './button'
import Tasks from './tasks'

class ToDoList extends Component {
    constructor (props) {
        super(props)

        this.state = {
            tasks: [],
            newTaskTitle: ""
        }

        this.newTask = this.newTask.bind(this)
        this.onTextChange = this.onTextChange.bind(this)
        this.deleteTask = this.deleteTask.bind(this)  
    }
    
    // callback to get nested input component value
    onTextChange (val) {
        this.setState({newTaskTitle: val})
    }

    newTask(e) {
        e.preventDefault()

        if (this.state.newTaskTitle) {
            var task = {
                key: Date.now(),
                title: this.state.newTaskTitle
            }

            this.setState((prevState) => {
                return { 
                    tasks: prevState.tasks.concat(task)
                }
            })
        }
        
        this.setState({newTaskTitle: ""})
    }

    deleteTask(key) {
        var filteredTasks = this.state.tasks.filter(function (task) {
            return (task.key !== key)
        })

        this.setState({
            tasks: filteredTasks
        })
    }

    render() {
        return (
            <div className="todo-list">
                <form className="new-task" onSubmit={this.newTask}>
                    <TitleInput val={this.state.newTaskTitle} onTextChange ={this.onTextChange} />
                    <Button className="button button_green" type="submit" char="43"/>
                </form>
                <Tasks entries={this.state.tasks} delete={this.deleteTask}/>
            </div>
        )
    }
}

export default ToDoList;