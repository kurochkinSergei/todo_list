import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import ToDoList from './todo_list'
import Header from './header'

var destination = document.querySelector('#root')

ReactDOM.render(
    <div>
        <Header/>
        <ToDoList/>
    </div>,
    destination
);