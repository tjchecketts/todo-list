import React from 'react';

class TodoList extends React.Component {
  state = { name: "" }
  
  //prevents form from reloading entire page
  handleSubmit = (e) => {
    //stops it from being a form
    e.preventDefault();
    // this.props.nameOfWhatYouNamedItInAppJS
    this.props.addItem( this.state.name);
    //this clears the form
    this.setState({ name: '' })

  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          placeholder="Add a Todo"
          required
          //this makes it read only
          value={ this.state.name }
          //this allows you to edit
          onChange={this.handleChange}
          />
      </form>
    )
  }
}

export default TodoList;