import React from 'react';

import './header.css';

const Header = (props) => {
	return (
		<header className="text-center py-4">
			<div className="container">
				<h1 className="mb-4 app-logo"><a href="/" className="text-light">Lista de Tareas</a></h1>
				{props.children}
			</div>
		</header>
	);
}

export default Header;