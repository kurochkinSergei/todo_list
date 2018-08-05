import React, { Component } from 'react'
import Button from './button'
import FlipMove from 'react-flip-move'

class Tasks extends Component {
    constructor (props) {
        super(props)

        this.createTask = this.createTask.bind(this)
        this.delete = this.delete.bind(this)
    }

    delete(key) {
        this.props.delete(key)
    }

    createTask(task) {
        return <Task key={task.key} 
                     keyProp={task.key} 
                     title={task.title}
                     delete={this.delete}/>
    }

    render() {
        var tasksEntries = this.props.entries
        var tasks = tasksEntries.map(this.createTask)

        return (
            <div className="tasks">
                <FlipMove duration={300} easing="ease-in-out">
                    {tasks}
                </FlipMove>    
            </div>    
        )
    }
}

class Task extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
            isHovering: false,
        };

        this.handleMouseHover = this.handleMouseHover.bind(this);    
    }
    
    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
    }

    render() {
        return (
            <div className="task" 
                    key = {this.props.key}
                    onMouseOver={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}>
                
                {/* {this.state.isHovering && */}
                    <Button className="button button_blue" char="9998"/>
                {/* } */}
                    {this.props.title}
                
                {/* {this.state.isHovering && */}
                    <div className="task-controls">    
                        <Button className="button button_green" char="10003"/>
                        <Button className="button button_red" char="10005"                onClick={() => this.props.delete(this.props.keyProp)}/>
                    </div>
                {/* }     */}
            </div>
        )
    }
}

export default Tasks