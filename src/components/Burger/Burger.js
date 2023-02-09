import React, { PropTypes } from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	// object to array conversion
	let transformedIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />
			});
		})
		.reduce((arr, el) => {
			// multidimensional array to onedimensional array
			// array flatten
			return arr.concat(el);
		}, []);

		if(transformedIngredients.length === 0) {
			transformedIngredients = <p>Please start adding ingredients</p>
		}

    return (
    	<div className={classes.Burger}>
    		<BurgerIngredient type="bread-top"/>
			{transformedIngredients}
    		<BurgerIngredient type="bread-bottom"/>
    	</div>
        
    );
};


export default burger;
