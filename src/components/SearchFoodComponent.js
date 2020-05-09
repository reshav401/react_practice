import React, { useState } from "react";
import axios from "axios";
import Recipe from './recipe/RecipeComponent'
import {v4 as uuid4} from 'uuid'
import Alert from "./recipe/Alert";
function SearchFoodComponent() {
  const [query, setQuery] = useState("");
  const[recipes,setRecipes]=useState([]);
  const[alert,setAlert]=useState("");

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {

    if(query !== ""){
    const result = await axios.get(url);
    if(!result.data.more){
      return setAlert("No food with such name")
    }
    setRecipes(result.data.hits)
    console.log(result); 
    setAlert("")
    setQuery("");
    }else{
      setAlert("Please fil the form")
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    getData();
  
  };
  return (
    <div className="App">
      <h1 onClick={getData}>Search Item</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert !== "" && <Alert alert={alert} />}
        <input type="text" placeholder="Search" className="type"
        onChange={(e)=>{setQuery(e.target.value)}} 
        value={query}/>
        <input type="submit" value="search" />
      </form>

      <div className="recipes">
          {
              recipes !==[]
              && recipes.map(recipe=><Recipe key={uuid4()} recipe={recipe} />)
          }
      </div>
    </div>
  );
}

export default SearchFoodComponent;
