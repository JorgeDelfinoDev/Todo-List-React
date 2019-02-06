import React, { Component } from 'react';

import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Form from './components/Form';

import './App.css';
import './components/fade.css';

class App extends Component {

	state = {
		tasks: []
	}

	componentDidMount () {
		const tasksLocal = localStorage.getItem('tasks');
		if (tasksLocal) {
			this.setState({
				tasks: JSON.parse(tasksLocal)
			})
		}
	}

	componentDidUpdate () {
		localStorage.setItem(
			'tasks',
			JSON.stringify(this.state.tasks)
		)
	}

	completeTask = (id, completed) => {
		if (!completed) {
			let taskList = [...this.state.tasks];
			taskList = taskList.filter(task => {
				if (task.id === id) {
					task.completed = true;
				}
				return task;
			});

			this.setState({
				tasks: taskList
			})
		}
	}

	createTask = task => {
		this.setState({
			tasks: [
				task,
				...this.state.tasks
			]
		})	
	}

	deleteTask = id => {
		let taskList = [...this.state.tasks];
		taskList = taskList.filter(task => task.id !== id);
		this.setState({
			tasks: taskList
		})
	}

	render() {
		return (
			<div className="App">
				<Header>
					<Form
						createTask={this.createTask}
					/>
				</Header>
				<ToDoList
					todoList={this.state.tasks}
					completeTask={this.completeTask}
					deleteTask={this.deleteTask}
				/>
			</div>
		);
	}
}

export default App;
