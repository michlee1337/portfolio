import React, { Component } from 'react';
import {inject,observer} from 'mobx-react';

@inject('TaskStore')
@observer
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const task = this.task.value;
    this.props.TaskStore.addTask(task);
    this.task.value = '';
  }

  render() {
    const {TaskStore} = this.props;
    return (
      <div className="App">
        <h2>You have {TaskStore.taskCount} tasks.</h2>

        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="What will you do today?" ref={input => this.task = input}/>
          <button>Add Task</button>
        </form>
        <ul>
          {TaskStore.tasks.map(task => (
              <li key={task}>
                {task}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
