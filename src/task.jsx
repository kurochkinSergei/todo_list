import React, { Component } from 'react'
import Button from './button'
import TitleInput from './title_input'

class Task extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
            isHovering: false,
            isTitleDisabled: true,
            titleInputValue: props.title,
            buttonChar: "9998"
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.handleMouseHover = this.handleMouseHover.bind(this); 
        this.toggleTitleInput = this.toggleTitleInput.bind(this);   
    }
    
    // callback to get nested input value
    onTextChange (val) {
        this.setState({titleInputValue: val})
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
    }

    toggleTitleInput() {
        // input is enabled
        if (!this.state.isTitleDisabled) {
            //save new task title
            this.props.editTask(this.props.keyProp, this.state.titleInputValue)
        }

        var newChar = this.state.isTitleDisabled ? "10003" : "9998"

        this.setState({
            isTitleDisabled: !this.state.isTitleDisabled,
            buttonChar: newChar
        })
    }

    render() {
        return (
            <div className="task" 
                    key = {this.props.key}
                    onMouseOver={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}>
                
                {/* {this.state.isHovering && */}
                    <Button className="button button_blue" char={this.state.buttonChar}
                    onClick= {this.toggleTitleInput}/>
                {/* } */}

                    <TitleInput val={this.state.titleInputValue}
                        type="text"
                        styleName="title-input_disabled"
                        isDisabled={ this.state.isTitleDisabled }
                        onTextChange={this.onTextChange}
                     />
                                
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

export default Task