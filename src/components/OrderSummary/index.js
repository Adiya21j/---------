import React from "react";
import css from "./style.module.css"

const OrderSummary = props => {
    return(
        <div>
            <h3>Таны захиалга</h3>
            <p>Таны сонгосон орцууд:</p>
            <ul>
                {Object.keys(props.ingredientsNames).map(el => (
                    <li key = {el}>
                        {props.ingredientsNames[el]}:{props.ingredients[el]}
                    </li>
                ))}
            </ul>
            <p>Цаашаа үргэлжлүүлэх үү?</p>
        </div>
    )
}

export default OrderSummary;