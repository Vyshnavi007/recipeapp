import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom';
import Card from '../Components/Card';

function Cuisine() {
  const [cuisine,setcuisine]=useState([]);
  let params=useParams();
  
  const getCuisine=async(name)=>{
    const check=localStorage.getItem({name});
    if(check){
      setcuisine(JSON.parse(check)) ;
    }
    else{
      const apiKey='2920a8b31713467d8c5bcc203a0cf313';
      const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}&number=12`);
      const recipes=await data.json();
      setcuisine(recipes.results);
    }
    
  };

  useEffect(()=>{
    getCuisine(params.type);
    console.log(params.type);
  },[params.type])
  return (
    <div className='grid grid-flow-col grid-rows-3 gap-5 w-10/12 mx-auto my-2'>
      {cuisine.map( (recipe)=> {
            return (
              <Card recipe={recipe}/>
            );
          }
        )}

    </div>
  )
        }
export default Cuisine;