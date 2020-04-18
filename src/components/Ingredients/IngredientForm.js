import React, {useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

    const inputState = useState({
        title: '', amount: ''
    });

    const submitHandler = event => {
        event.preventDefault();
        console.log(inputState)
        // ...
    };

    return (
        <section className="ingredient-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="title">Name</label>
                        <input type="text" id="title"
                               onChange={event => {
                                   const e = event.target.value;
                                   inputState[1](preInputState => (
                                           {...preInputState, title: e}
                                       )
                                   )
                               }}
                               value={inputState[0].title}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount"
                               onChange={event => {
                                   const e = event.target.value;
                                   inputState[1](preInputState => (
                                           {...preInputState, amount: e}
                                       )
                                   )
                               }}
                               value={inputState[0].amount}/>
                    </div>
                    <div className="ingredient-form__actions">
                        <button type="submit">Add Ingredient</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default IngredientForm;
