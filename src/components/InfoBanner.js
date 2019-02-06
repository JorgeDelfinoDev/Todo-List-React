import React from 'react';

import './infoBanner.css';

const InfoBanner = (props) => {

	const colorAlert = (info) => {
		switch (info) {
			case 'created':
				return 'alert-info';
			case 'completed':
				return 'alert-success';
			case 'deleted':
				return 'alert-danger';
			default:
				break;
		}
	}
	return (
		<div className={`InfoBanner alert ${colorAlert(props.info)}`} role="alert">
			<h5 className="m-0">Task {props.info}</h5>
		</div>
	);
}
 
export default InfoBanner;