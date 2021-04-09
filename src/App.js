import React, { useEffect, useState} from 'react'
import './App.css';

const App = () => {

  const APP_ID = "718a7f36";
  const APP_KEY = "5e90b2093568757314ac8343c695fcfb"

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q='chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
  }

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
