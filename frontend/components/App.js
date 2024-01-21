import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        Todo App
        <TodoList />
        <Form />
      </div>
    )
  }
}
