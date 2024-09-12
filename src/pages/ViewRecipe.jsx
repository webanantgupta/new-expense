import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewRecipe = () => {
    let location = useLocation();
    console.log(location.state.recipe); 
    
  return (
    <div>
      
    </div>
  )
}

export default ViewRecipe
