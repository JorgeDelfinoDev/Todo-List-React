import React, { Component } from 'react';

import './task.css';

const Task = props => {

	const itemCompleted = () => {
		const { id, completed } = props.info;
		props.completeTask(id, completed);
	}

	const deleteTask = () => {
		const { id } = props.info;
		props.deleteTask(id);
	}
	
	const { completed } = props.info;

	const bgItem = completed ? 'bg-success' : 'bg-secondary';
	const iconItem = completed ? 'fas fa-check' : 'fas fa-times';

	return (
		<li className="task-item list-group-item col-12 col-md-8 mx-auto mb-4 p-0">
			<div className={`d-flex justify-content-start align-items-center ${bgItem} p-3`}>
				<i onClick={itemCompleted} className={`${iconItem} mr-4 completed-icon`} style={{fontSize: 30}}></i>
				<h2>{props.info.title}</h2>
				<i onClick={deleteTask} className="fas fa-trash-alt ml-auto delete-icon" style={{fontSize: 16}}></i>
			</div>
		</li>
	);
}
 
export default Task;