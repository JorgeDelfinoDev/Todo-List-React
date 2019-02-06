import React from 'react';

import './header.css';

const Header = (props) => {
	return (
		<header className="text-center py-4">
			<h1 className="mb-4 app-logo"><a href="/" className="text-light">To Do List App</a></h1>
			{props.children}
		</header>
	);
}

export default Header;