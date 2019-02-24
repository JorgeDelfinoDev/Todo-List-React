import React, { Component } from 'react';

import './task.css';

class Task extends Component {

	itemCompleted = () => {
		const { id, completed } = this.props.info;
		this.props.completeTask(id, completed);
	}

	deleteTask = () => {
		const { id } = this.props.info;
		this.props.deleteTask(id);
	}

	render() {
		const { completed } = this.props.info;

		const bgItem = completed ? 'bg-success' : 'bg-secondary';
		const iconItem = completed ? 'fas fa-check' : 'fas fa-times';

		return (
			<li className="task-item list-group-item col-12 col-md-8 mx-auto mb-4 p-0">
				<div className={`d-flex justify-content-start align-items-center ${bgItem} p-3`}>
					<i onClick={this.itemCompleted} className={`${iconItem} mr-4 completed-icon`} style={{fontSize: 30}}></i>
					<h2>{this.props.info.title}</h2>
					<i onClick={this.deleteTask} className="fas fa-trash-alt ml-auto delete-icon" style={{fontSize: 16}}></i>
				</div>
			</li>
		);
	}
}
 
export default Task;