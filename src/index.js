import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import ToDoList from './ToDoList'

var destination = document.querySelector('#root')

ReactDOM.render(
    <div>
        <p>What ToDo?</p>
        <ToDoList/>
    </div>,
    destination
);