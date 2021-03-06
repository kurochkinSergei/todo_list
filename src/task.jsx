import React, { Component } from 'react'
import Button from './button'
import TitleInput from './title_input'

class Task extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
            isTitleDisabled: true,
            titleInputValue: props.title,
            isCompleted: props.isCompleted,
            editButtonChar: "9998"
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.toggleTitleInput = this.toggleTitleInput.bind(this);   
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.isCompleted !== prevProps.isCompleted) {
            this.setState({
                isCompleted: this.props.isCompleted
            })
        }
    }

    // callback to get nested input value
    onTextChange (val) {
        this.setState({titleInputValue: val})
    }

    toggleTitleInput() {
        if (this.state.titleInputValue) {
            // input is enabled
            if (!this.state.isTitleDisabled) {
                //save new task title
                this.props.editTask(this.props.keyProp,this.state.titleInputValue)
            }

            var newChar = this.state.isTitleDisabled ? "10003" : "9998"

            this.setState({
                isTitleDisabled: !this.state.isTitleDisabled,
                editButtonChar: newChar
            })
        } else {
            
        }
    }

    render() {
        return (
            <div className={`task ${this.state.isCompleted && "task_completed" }`}
                    key = {this.props.key}
                    onMouseOver={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}>
                
                {!this.state.isCompleted && 
                    <Button className="button button_blue" 
                            char={this.state.editButtonChar}
                            onClick= {this.toggleTitleInput}/>
                }

                <TitleInput val={this.state.titleInputValue}
                            type="text"
                            styleName="title-input_disabled"
                            isDisabled={ this.state.isTitleDisabled }
                            onTextChange={this.onTextChange}/>

                { this.state.isTitleDisabled &&
                    <div className="task-controls">
                        {!this.state.isCompleted &&    
                            <Button className="button button_green" 
                                    char="10003"
                                    onClick={() => this.props.complete(this.props.keyProp)}/>
                        }
                        <Button className="button button_red" 
                                char="10005"
                                onClick={() => this.props.delete(this.props.keyProp)}/>
                    </div> 
                }
            </div>
        )
    }
}

export default Task