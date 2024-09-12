import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';





const Recipe = () => {
  const [recipe, setrecipe] = useState([]);
  // console.log(recipe);
  const getAllRecipe = async () => {
    let res = await fetch(' https://api.edamam.com/search?q=burger&app_id=e9098c0e&app_key=2e08c4b4f3976bb085cd3b73a6c9720e ');
    let data = await res.json();
    console.log(data.hits);
    setrecipe(data.hits);
  }

  useEffect(() => {
    getAllRecipe();
  }, [])

  const hnadleClick = (obj) => {
    console.log(obj)
    // console.log(i+1);



  }

  return (
    <div className='row m-0 p-0 justify-content-center gap-5'>
      {
        recipe.map((ele) => {
          return <div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={ele.recipe.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ele.recipe.label}</h5>
                {/* <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p> */}
                <Link to="/view" state={ele} className="btn btn-primary">
                  View Recipe
                </Link>
                <button onClick={() => hnadleClick(ele.recipe)}>click</button>
              </div>
            </div>

          </div>

        })
      }
    </div>
  )
}

export default Recipe
