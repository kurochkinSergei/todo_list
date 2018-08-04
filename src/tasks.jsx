import React, { Component } from 'react'
import Button from './button'

class Tasks extends Component {
    constructor (props) {
        super(props)
        
    this.createTask = this.createTask.bind(this)    
    }

    delete(key) {
        this.props.delete(key)
    }

    createTask(task) {
        return <div className="task" key = {task.key}>
                <Button className="button button_blue" char="9998"/>
                    {task.title}
                <Button className="button button_green" char="10003"/>
                <Button className="button button_red" char="10005" onClick={() => this.delete(task.key)}/>
            </div>
    }
    render() {
        var tasksEntries = this.props.entries
        var tasks = tasksEntries.map(this.createTask)

        return (
            <div className="tasks">
                {tasks}
            </div>    
        )
    }
}

export default Tasks