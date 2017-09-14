import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import axios from 'axios';

class App extends Component {
  state = { todos: [] }

// loads all then displays but works better
// special React function
  componentDidMount() {
    //Todo gets item from server
    //keeps info here if page refreshes
    axios.get('/api/items')
      .then( res => this.setState ({ todos: res.data}))
  }

  // we made this function
  // have to use hashrocket if it is our function
  addItem = (name) => {
    //todo add item to database
    //todo update state
    const {todos} = this.state;
    //generate random 4 digit number
    // const id = Math.floor(( 1 + Math.random()) * 0X1000).toString();
    // const todo = {id, name, complete: false }

    //this passes data from react to server side
    axios.post('/api/items', { item: {name}} )
      .then( res => {
        this.setState({ todos: [res.data, ...todos] })
      })
  }

  updateTodo = (id) => {
    //todo update todo in db
    // update state
    axios.put(`/api/items/${id}`)
      .then( res => {
        let todos = this.state.todos.map( todo => {
          if (todo.id === id)
            return res.data
          return todo
        })
        this.setState({ todos })
    });

  }

  deleteTodo = (id) => {
    //todo remove todo from db
    // update state
    const { todos } = this.state;
    axios.delete(`/api/items/${id}`)
      .then( res => 
        this.setState({ todos: todos.filter( t => t.id !== id ) }
      )
    )
  }

  // special React function
  render() {
    return (
      <div className="container">
        <TodoForm addItem= { this.addItem } />
        <TodoList 
          todos= { this.state.todos }
          updateTodo= { this.updateTodo }
          deleteTodo= { this.deleteTodo }
        />
      </div>
    );
  }
}

export default App;
