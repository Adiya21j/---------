import React from "react";

import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = props => (
  <div className={css.BuildControls}>
    <p>Бургерийн үнэ : {props.price}</p>
    <BuildControl ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} disabled = {props.disabledIngredients} type="salad" orts="Салад" />
    <BuildControl ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} disabled = {props.disabledIngredients} type="bacon" orts="Гахайн мах" />
    <BuildControl ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} disabled = {props.disabledIngredients} type="cheese" orts="Бяслаг" />
    <BuildControl ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} disabled = {props.disabledIngredients} type="meat" orts="Үхрийн мах" />
  </div>
);

export default BuildControls;
