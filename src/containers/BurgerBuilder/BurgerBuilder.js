import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
 	salad: 0.5,
 	cheese: 0.4,
 	meat: 1.3,
 	bacon: 0.7
 };

class BurgerBuilder extends React.Component {
 // constructor(props) {
 // 	super(props);
 // 	this.state = props;
 // } 

 state = {
 	ingredients: {
 		salad: 0,
 		bacon: 0,
 		cheese: 0,
 		meat: 0
 	},
 	totalPrice: 4,
 	purchaseable: false
 }

 updatePurchaseState = (ingredients) => {
 	const sum = Object.keys(ingredients)
 		.map(igKey => {
 			return ingredients[igKey];
 		})
 		.reduce((sum, el) => {
 			return sum + el;
 		},0);
 	this.setState({purchaseable: sum > 0});
 }

 addIngredientHandler = (type) => {
 	const oldCount = this.state.ingredients[type];
 	const updatedCounted = oldCount + 1;	
 	// chanage state immutably
 	const updatedIngredients = {
 		...this.state.ingredients
 	}
 	updatedIngredients[type] = updatedCounted;
 	const priceAddition = INGREDIENT_PRICES[type];
 	const oldPrice = this.state.totalPrice;
 	const newPrice = oldPrice + priceAddition;
 	this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
 	this.updatePurchaseState(updatedIngredients);
 }

 removeIngredientHandler = (type) => {
 	const oldCount = this.state.ingredients[type];
 	if(oldCount <=0 ) return;
 	const updatedCounted = oldCount - 1;	
 	// chanage state immutably
 	const updatedIngredients = {
 		...this.state.ingredients
 	}
 	updatedIngredients[type] = updatedCounted;
 	const priceDeduction = INGREDIENT_PRICES[type];
 	const oldPrice = this.state.totalPrice;
 	const newPrice = oldPrice - priceDeduction;
 	this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
 	this.updatePurchaseState(updatedIngredients);
 }

  render(){
  	const disabledInfo = {
  		...this.state.ingredients
  	}
  	for(let key in disabledInfo) {
  		disabledInfo[key] = disabledInfo[key] <= 0;	
  	}
   	return(
   		<Aux>
   			<Burger ingredients={this.state.ingredients}/>
   			<BuildControls 
   				ingredientAdded={this.addIngredientHandler}
   				ingredientRemoved={this.removeIngredientHandler}
   				disabled={disabledInfo}
   				purchaseable={this.state.purchaseable}
   				price={this.state.totalPrice}
   			/>
   		</Aux>
   	); 
  }
}

export default BurgerBuilder;