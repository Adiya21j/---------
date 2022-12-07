import React, { Component } from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";

const INGREDIENT_PRICES = {salad: 1000, cheese: 1500, bacon: 2000, meat: 4000};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },

    totalPrice: 0
  };

  ortsNemeh = type => {
    console.log("====>" + type);

    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({ totalPrice: newPrice, ingredients: newIngredients });
  };

  ortsHasah = type => {
    console.log("====>hasj bn" + type);

    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]--;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    this.setState({ totalPrice: newPrice, ingredients: newIngredients });
  };

  render() {
    const disabledIngredients = {...this.state.ingredients};
    
    for(let key in disabledIngredients){
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    return (
      <div>
        <Burger orts={this.state.ingredients} />
        <BuildControls 
          price = {this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          ortsNemeh={this.ortsNemeh} 
          ortsHasah = {this.ortsHasah}/>
      </div>
    );
  }
}

export default BurgerBuilder;
