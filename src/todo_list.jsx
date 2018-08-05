import React, {Component} from 'react'
import TitleInput from './title_input'
import Button from './button'
import Tasks from './tasks'

class ToDoList extends Component {
    constructor (props) {
        super(props)
        

        this.state = {
            tasks: this.getTasksFromStorage(),
            newTaskTitle: ""
        }

        this.newTask = this.newTask.bind(this)
        this.updateTasksState = this.updateTasksState.bind(this)
        this.getTasksFromStorage = this.getTasksFromStorage.bind(this)
        this.onTextChange = this.onTextChange.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.completeTask = this.completeTask.bind(this)
        this.editTaskTitle = this.editTaskTitle.bind(this)  
    }

    getTasksFromStorage = () => {
        if (localStorage.getItem("tasks") !== null) {
            return JSON.parse(localStorage.getItem("tasks"))
        } else {
            return []
        }
    }
    
    updateTasksState = (tasksArray) => {
        localStorage.setItem("tasks", JSON.stringify(tasksArray))

        this.setState({
            tasks: tasksArray
        })    
    }


    // callback to get nested input value
    onTextChange (val) {
        this.setState({newTaskTitle: val})
    }

    newTask(e) {
        e.preventDefault()

        if (this.state.newTaskTitle) {
            var task = [{
                key: Date.now(),
                title: this.state.newTaskTitle,
                isCompleted: false
            }]

            var newTasksArray = task.concat(this.state.tasks)
            
            this.updateTasksState(newTasksArray)
        }
        
        this.setState({newTaskTitle: ""})
    }

    deleteTask(key) {
        var filteredTasks = this.state.tasks.filter(function (task) {
            return (task.key !== key)
        })

        this.updateTasksState(filteredTasks)
    }

    completeTask(key) {
        var updatedTasks = this.state.tasks.map(function (task) { 
            if (task.key === key) {
                return {...task, isCompleted: true}                
            } else {
                return task
            }
        })
        
       this.updateTasksState(updatedTasks)
    }

    editTaskTitle(key, newTitle) {
        var updatedTasks = this.state.tasks.map(function (task) { 
            if (task.key === key) {
                return {...task, title: newTitle}                
            } else {
                return task
            }
        })

        localStorage.setItem("tasks", JSON.stringify(updatedTasks))
        
        this.setState({
            tasks: updatedTasks
        })
    }

    render() {
        return (
            <div className="todo-list">
                <form className="new-task" onSubmit={this.newTask}>
                    <TitleInput val={this.state.newTaskTitle} onTextChange ={this.onTextChange} />
                    <Button className="button button_green" type="submit" char="43"/>
                </form>

                <Tasks entries={this.state.tasks} 
                       delete={this.deleteTask}
                       complete={this.completeTask}
                       editTaskTitle={this.editTaskTitle}/>
            </div>
        )
    }
}

export default ToDoList;