import React, { Component } from 'react';

import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Form from './components/Form';
import InfoBanner from './components/InfoBanner';

import { CSSTransition } from 'react-transition-group';

import './components/fade-center.css';
import './App.css';

class App extends Component {

	state = {
		tasks: [],
		infoMessage: '',
		showAlert: false
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
				tasks: taskList,
				infoMessage: 'completada',
				showAlert: true
			})
		}
	}

	createTask = task => {

		this.setState({
			tasks: [
				task,
				...this.state.tasks
			],
			infoMessage: 'creada',
			showAlert: true
		})	
	}

	deleteTask = id => {

		let taskList = [...this.state.tasks];
		taskList = taskList.filter(task => task.id !== id);
		this.setState({
			tasks: taskList,
			infoMessage: 'eliminada',
			showAlert: true
		})
	}

	hideAlert = () => {
		setTimeout(() => {
			this.setState({
				showAlert: false
			})
		}, 3000);
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
				<CSSTransition
					in={this.state.showAlert}
					timeout={500}
					classNames='fade-center'
					onEntered={this.hideAlert}
					mountOnEnter
					unmountOnExit
				>
					<InfoBanner
						info={this.state.infoMessage}
					/>
				</CSSTransition>
			</div>
		);
	}
}

export default App;
