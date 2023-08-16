import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

function Actualrecipe() {
  let params=useParams();
  const [details,setdetails]=useState({});
  const fetchdetails= async()=>{
    const apiKey="2920a8b31713467d8c5bcc203a0cf313";
    const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`);
    const detailedrecipe=await data.json();
    setdetails(detailedrecipe);
  }
  useEffect(()=>{
    fetchdetails(params.name);
  },[params.name])
  
  const [instruct,setinstruct]=useState(true);
  function ingredientHandler(){
    setinstruct(false);
  }
  function instructionHandler(){
    setinstruct(true);
  }

  return (
    <div className='w-8/12 mx-auto relative'>
      <div className='flex justify-around my-10'>
          <h1 className='text-3xl font-bold text-white'>{details.title}</h1>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <img className="w-3/4 rounded-lg py-3" src={details.image}/>
      <div className='flex gap-32 relative top-5 text-2xl'>
        
          <button className={`text-white ${!instruct ? 'p-5' : 'bg-gradient-to-r from-purple-500 to-pink-500 p-5 rounded-lg' }`} onClick={instructionHandler}>Instructions</button>
          <button className={`text-white ${instruct ? 'p-5 ' : 'bg-gradient-to-r from-purple-500 to-pink-500 p-5 rounded-lg' }`} onClick={ingredientHandler}>Ingredients</button>
      </div>
      <div>
      {instruct && (<p className="text-xl px-4 text-white leading-loose py-12" dangerouslySetInnerHTML={{__html: details.instructions}}></p>)}
      {!instruct && <div className='grid grid-cols-3 gap-8 my-16'>{details.extendedIngredients.map((item)=>
      (<p className='text-white text-lg'>{item.name},</p>))}
      </div>}
      
      </div>
    </div>
    </div>
  )
      }

export default Actualrecipe