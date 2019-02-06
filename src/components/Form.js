import React, { Component, Fragment } from 'react';
import uuidV1 from 'uuid/v1';

import { CSSTransition } from 'react-transition-group';
import './fade.css';

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

	showError = () => {
		if (this.state.error) {
			return 	<div class="alert alert-danger mx-auto my-0 col-md-6 col-sm-4" role="alert">
						¡No puedes crear una tarea vacia!
					</div>
		} else {
			return null;
		}
	}

	render() { 
		return (
			<div className="container">
				<form onSubmit={this.createTask}>
					<div className="row form-group d-flex justify-content-center mx-sm-3">
						<input className="form-control form-control-lg col-md-6 col-sm-10" ref={this.taskRef} type="text" placeholder="Task to do"/>
						<button type="submit" className="btn btn-primary ml-md-4 col-md-2 col-sm-10">Add Task</button>
					</div>
					<CSSTransition
						in={this.state.error}
						timeout={1000}
						classNames="fade"
					>
						<Fragment>
							{ this.showError() }
						</Fragment>
					</CSSTransition>

				</form>
			</div>
		);
	}
}
 
export default Form;