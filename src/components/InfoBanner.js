import React from 'react';

import './infoBanner.css';

const InfoBanner = props => {

	const colorAlert = (info) => {
		switch (info) {
			case 'creada':
				return 'alert-info';
			case 'completada':
				return 'alert-success';
			case 'eliminada':
				return 'alert-danger';
			default:
				break;
		}
	}
	return (
		<div className={`InfoBanner alert ${colorAlert(props.info)}`} role="alert">
			<h5 className="m-0">Tarea {props.info}</h5>
		</div>
	);
}
 
export default InfoBanner;