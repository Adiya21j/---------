import React, { Component } from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/general/modal";
import OrderSummary from "../../components/OrderSummary";

const INGREDIENT_PRICES = {salad: 1000, cheese: 1500, bacon: 2000, meat: 4000};
const INGREDIENT_NAMES ={
  bacon: "Гахайн мах",
  cheese: "Бяслаг",
  salad: "Салад",
  meat: "Үхрийн мах"
};

class BurgerPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },

    totalPrice: 0,
    purchasing: false,
    confirmOrder: false

  };

  showConfirmModal = () =>{
    this.setState({confirmOrder: true});
  }

  ortsNemeh = type => {

    console.log("====>" + type);
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ purchasing: true, totalPrice: newPrice, ingredients: newIngredients });

  };

  ortsHasah = type => {
    console.log("====>hasj bn" + type);

    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]--;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    this.setState({ purchasing: newPrice > 0, totalPrice: newPrice, ingredients: newIngredients });
  };

  render() {
    const disabledIngredients = {...this.state.ingredients};
    
    for(let key in disabledIngredients){
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    return (
      <div>
        <Modal>
          <OrderSummary ingredientsNames = {INGREDIENT_NAMES} ingredients={this.state.ingredients}/>
        </Modal>
        <Burger orts={this.state.ingredients} />
        <BuildControls 
          ingredientsNames = {INGREDIENT_NAMES}
          disabled = {!this.state.purchasing}
          price = {this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          ortsNemeh={this.ortsNemeh} 
          ortsHasah = {this.ortsHasah}/>
      </div>
    );
  }
}

export default BurgerPage;