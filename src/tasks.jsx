import React, { Component } from 'react'
import Task from './task'
import SortBlock from './sort_block'
import FlipMove from 'react-flip-move'

class Tasks extends Component {
    constructor (props) {
        super(props)

        this.createTask = this.createTask.bind(this)
        this.delete = this.delete.bind(this)
        this.editTask = this.editTask.bind(this)
        this.complete = this.complete.bind(this)
        this.sortTasks = this.sortTasks.bind(this)
    }

    delete(key) {
        this.props.delete(key)
    }

    complete(key) {
        this.props.complete(key)
    }

    editTask(key, newTitle) {
        this.props.editTaskTitle(key, newTitle)
    }

    createTask(task) {
        return <Task key={task.key} 
                     keyProp={task.key} 
                     title={task.title}
                     isCompleted = {task.isCompleted}
                     delete={this.delete}
                     complete={this.complete}
                     editTask={this.editTask}/>
    }

    sortTasks(direction) {
        this.props.sortTasks(direction)
    }

    render() {
        var tasksEntries = this.props.entries
        var tasks = tasksEntries.map(this.createTask)

        return (
            <div className="tasks">
                <SortBlock sortTasks={this.sortTasks}/>
                <FlipMove duration={300} easing="ease-in-out">
                    {tasks}
                </FlipMove>    
            </div>    
        )
    }
}

export default Tasks