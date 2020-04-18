import React, {useEffect, useState} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
    const {onLoadIngredient} = props
    const [title, setTitle] = useState('')

    const searchHandler = props => {
        setTitle(props.target.value)
    }

    useEffect(() => {
        const query = title.length === 0 ? '' : `?orderBy="title"&equalTo="${title}"`
        fetch('https://burger-builder-56e5a.firebaseio.com/ingredients2.json' + query)
            .then(res => res.json())
            .then(res => {
                console.log('res')
                let loadedIngredients = [];
                for (let key in res) {
                    loadedIngredients.push({
                        id: key,
                        title: res[key].title,
                        amount: res[key].amount
                    })
                }
                onLoadIngredient(loadedIngredients);
            })
    }, [title, onLoadIngredient])

    return (
        <section className="search">
            <Card>
                <div className="search-input">
                    <label>Filter by Title</label>
                    <input
                        value={title}
                        onChange={e => searchHandler(e)}
                        type="text"/>
                </div>
            </Card>
        </section>
    );
});

export default Search;
