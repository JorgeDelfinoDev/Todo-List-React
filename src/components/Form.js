import React, { Component } from 'react';
import uuidV1 from 'uuid/v1';

import { CSSTransition } from 'react-transition-group';

import './fade-center.css';

class Form extends Component {

	state = {
		error: false
	}

	taskRef = React.createRef();

	createTask = event => {
		event.preventDefault();

		const title = this.taskRef.current.value;

		if (title !== '') {
			const task = {
				'id': uuidV1(),
				'title': title,
				'completed': false
			}
			this.props.createTask(task);
			this.setState({
				error: false
			})
		} else {
			this.setState({
				error: true
			})
		}

		this.taskRef.current.value = '';
	}

	render() { 
		return (
			<form onSubmit={this.createTask}>
				<div className="form-group d-flex justify-content-center row w-100 m-0">
					<input className="form-control form-control-lg col-12 col-md-6" ref={this.taskRef} type="text" placeholder="Añade una nueva tarea..."/>
					<button type="submit" className="btn btn-primary ml-md-4 col-12 col-md-2">
						Añadir tarea
					</button>
				</div>
				<CSSTransition
					in={this.state.error}
					timeout={1000}
					classNames="fade-center"
					mountOnEnter
					unmountOnExit
				>
					<div class="alert alert-danger mx-auto my-0 col-md-6 col-sm-4" role="alert">
						¡No puedes crear una tarea vacia!
					</div>
				</CSSTransition>
			</form>
		);
	}
}
 
export default Form;