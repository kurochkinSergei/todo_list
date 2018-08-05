import React, { Component } from 'react'
import Button from './button'
import TitleInput from './title_input'

class Task extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
            isHovering: false,
            isTitleDisabled: true,
            buttonChar: "9998"
        };

        this.handleMouseHover = this.handleMouseHover.bind(this); 
        this.toggleTitleInput = this.toggleTitleInput.bind(this);   
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
        var newChar = this.state.isTitleDisabled ? "10003" : "9998" 
        this.setState({
            isTitleDisabled: !this.state.isTitleDisabled,
            buttonChar: newChar
        })

        console.log(this.state.buttonChar)
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

                    <TitleInput val={this.props.title}
                        type="text"
                        styleName="title-input_disabled"
                        isDisabled={ this.state.isTitleDisabled }
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