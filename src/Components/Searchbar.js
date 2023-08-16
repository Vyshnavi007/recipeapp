import React from 'react'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Searchbar() {
    const [input,setInput]=useState("");
    const navigate=useNavigate();
    function submitHandler(e){
        e.preventDefault();
        navigate('/Searched/' +input)
    }
  return (
   <form onSubmit={submitHandler}>
    <div className='flex h-7 justify-center items-center -top-7 relative '>
        <FaSearch className='h-9 mx-2 absolute right-1/3'/>
        <input onChange={(e)=> setInput(e.target.value)} value={input} className='w-1/3 text-white rounded-md p-3 bg-gradient-to-r from-purple-500 to-pink-500' type="text" placeholder='Your favorite recipe..'  />
    </div>
    
   </form>
  )
}

export default Searchbar