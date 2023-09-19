import React from 'react'
import "./App.css"
import TodoProvider from './context/TodoProvider'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

export default function App() {
  return (
    <div className = "App">
      <header className="App-header">
    <h1>Todo List</h1>
      </header>
    <TodoProvider>
      <TodoForm/>
      <TodoList/>
    </TodoProvider>
    </div>
  )
}
