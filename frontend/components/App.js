import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      formData: ''
    }
  }

  formValue = evt => {
    this.setState({...this.state, formData: evt.target.value})
  }

  addTask = evt => {
    evt.preventDefault();
    this.setState({
      todo: [...this.state.todo, {
        name: this.state.formData,
        id: new Date(),
        completed: false
      }],
      formData: ''
    })
  }

  render() {
    return (
      <div>
        Todo App
        <TodoList taskList={this.state.todo} />
        <Form addTask={this.addTask} formValue={this.formValue} />
      </div>
    )
  }
}
