import React from 'react';
import ReactDOM from 'react-dom';

class ToDoList extends React.Component {
  render() {
    const ll = this.props.list.map((a)=><li key={a}>{a}</li>);
    return (
      <div>
        <i>This is ToDo List</i>
        <ul>{ll}</ul>
      </div>
    );
  }
}

export default ToDoList;
