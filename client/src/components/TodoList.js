import React from 'react';
import Todo from './Todo';

//if no state, usually no class
//I think it needs props
const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <div className="row">
    { todos.map( todo => 
      <Todo
        key={todo.id}
        updateTodo = {updateTodo}
        deleteTodo = {deleteTodo}
        {...todo}
      />
    )}
  </div>
)

export default TodoList;