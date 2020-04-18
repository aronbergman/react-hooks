import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from "./IngredientList";

const Ingredients = () => {
    const [userIngredients, setUserIngredients] = useState([])

    const addIngredientHandler = ingredient => {
        fetch('https://burger-builder-56e5a.firebaseio.com/ingredients2.json', {
            method: 'POST',
            body: JSON.stringify(ingredient), // [] в JSON
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            return res.json() // JSON в норм js
        }).then(res => {
            setUserIngredients(prevIngredient => [
                ...prevIngredient,
                {id: res.name, ...ingredient}
            ])
        })
    }

    return (
        <div className="App">
            <IngredientForm
                onAddIngredient={addIngredientHandler}/>

            <section>
                <Search/>
                <IngredientList
                    onRemoveItem={() => {
                    }}
                    ingredients={userIngredients}/>
                {/* Need to add list here! */}
            </section>
        </div>
    );
}

export default Ingredients;
