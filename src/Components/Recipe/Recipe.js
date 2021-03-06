import React, { useEffect, useState } from "react";
import './Recipe.css';
import Recipe from './Api.js';
import './recipe.module.css'
const App = () => {

    const APP_ID = "b1dd83d8";
    const APP_KEY = "4ede73278202c002c6dd9d45f131b749";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');



    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };
    const upadateSearch = e => {
        setSearch(e.target.value);

    };
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    useEffect(() => {
        getRecipes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <div className="recipe-box">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={upadateSearch} />
                <button className="search-button" type="submit">Search</button>
            </form>

            <div className="recepies">
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients} />
                ))}
            </div>
        </div>
    );
}
export default App;
