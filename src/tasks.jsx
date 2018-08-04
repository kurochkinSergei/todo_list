import React, { Component } from 'react'

class Tasks extends Component {
    constructor (props) {
        super(props)
    }

    createTask(task) {
        return <div className="task" key = {task.key}>
            {task.title}
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