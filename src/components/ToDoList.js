import React, { Component } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Task from './Task';
import './todoList.css';
import './fadeSlide.css';

class ToDoList extends Component {

	render() {
		const {todoList} = this.props;
		return (
			<div className="container todo-list py-4">
				<ul className="list-group">
					<TransitionGroup>
						{
							todoList.map(task => (
								<CSSTransition
									appear={false}
									key={task.id}
									timeout={1000}
									classNames="fadeSlide"
								>
									<Task
										info={task}
										key={task.id}
										completeTask={this.props.completeTask}
										deleteTask={this.props.deleteTask}
									/>
								</CSSTransition>
							))
						}
					</TransitionGroup>
				</ul>
			</div>
		);
	}
}
 
export default ToDoList;