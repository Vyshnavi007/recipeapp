import React from 'react'
import Card from '../Components/Card';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Searched() {
    const [searchitems,setsearchitems]=useState([]);
    let params=useParams();
  
    const getitems=async(name)=>{
        const apiKey='2920a8b31713467d8c5bcc203a0cf313';
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}&number=12`);
        const recipes=await data.json();
        setsearchitems(recipes.results);
    };
    useEffect(()=>{
      getitems(params.item);
      console.log(params.item);
    },[params.item])
  return (
    <div>
        <div className='grid grid-flow-col grid-rows-4 gap-5 w-10/12 mx-auto my-2'>
      {searchitems.map( (recipe)=> {
            return (
              <Card recipe={recipe}/>
            );
          }
        )}
        </div>
    </div>
  )
}

export default Searched