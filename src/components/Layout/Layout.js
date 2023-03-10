import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';

const layout = (props) => {
	return (
	<Aux>
		<div>Toolbar, Sidedrawer, backgrop</div>
		<main className={classes.Content}>
			{props.children}	
		</main>
	</Aux>
	);
}

export default layout;