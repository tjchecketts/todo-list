import React from 'react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },

  pointer: {
    cursor: 'pointer',
    color: 'red'
  }
}

const Todo = ({ id, complete, name, updateTodo, deleteTodo }) => (
  <div className = "col s12">

    <div className = "col s8">
      <span style={complete ? styles.complete : {} } className = "center">
        {name}
      </span>
    </div>

    <div className = "col s2">
      <input
        id={`item-${id}`}
        type='checkbox'
        defaultChecked={complete}
        onClick={() => updateTodo(id)}
      />
      <label htmlFor={`item-${id}`}>Complete?</label>
    </div>

    <div style={styles.pointer} onClick={ () => deleteTodo(id) } className = "col s2">
      X
    </div>

  </div>
)


export default Todo;