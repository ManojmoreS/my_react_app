import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './todoList';
import BasicExample from './basicformik';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', list: []};
  }

  handleChange=(event)=> {
    this.setState({value: event.target.value});
  }

  handleSubmit=(event)=> {
    const newList = [...this.state.list, this.state.value]
    this.setState({list: newList});
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <ToDoList list={this.state.list} />
        </form>
        <BasicExample />
      </div>
    );
  }
}

export default NameForm;
