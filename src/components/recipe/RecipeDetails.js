import React from 'react'
import { v4 as uuid4 } from 'uuid'

function RecipeDetails({ingredients}) {
    return ingredients.map(ingredient=>{
        return (
            <ul key ={uuid4()} className="ingredient-list">
                    <li className="ingredient-text">{ingredient.text}</li>
                    <li className="ingredient-weight">{ingredient.weight}</li>
            </ul>
        )
    })
}

export default RecipeDetails
