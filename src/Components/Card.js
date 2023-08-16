import React from 'react'
import {Link} from "react-router-dom"
function Card({recipe}) {
  return (
    <Link to={"/Actualrecipe/" +recipe.id}>
    <div className=' h-60 relative flex flex-col justify-center  bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:shadow-2xl hover:shadow-slate-200 transition-all 200 p-3'>
        <h2 className='font-bold text-white mx-1'>{recipe.title}</h2>
        <img src={recipe.image} className='rounded-xl object-cover h-3/4'/>
    </div>
    </Link>
  )
}

export default Card