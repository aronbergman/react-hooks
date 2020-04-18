import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from "./IngredientList";

const Ingredients = () => {
    const [userIngredients, setUserIngredients] = useState([])

    const addIngredientHandler = ingredient => {
        setUserIngredients(prevIngredient => [
            ...prevIngredient,
            {id: Math.random().toString(), ...ingredient}
        ])
    }

    return (
        <div className="App">
            <IngredientForm
                onRemoveItem={() => {}}
                onAddIngredient={addIngredientHandler}/>

            <section>
                <Search/>
                <IngredientList ingredients={userIngredients}/>
                {/* Need to add list here! */}
            </section>
        </div>
    );
}

export default Ingredients;
