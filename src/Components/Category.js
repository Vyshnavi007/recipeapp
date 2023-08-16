import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiChopsticks} from "react-icons/gi";
import {NavLink} from 'react-router-dom';
import React from 'react'

function Category() {
    const pizzaSliceStyle = {
        color: 'white',
      };
  return (
    <div className='flex justify-center gap-20 my-14'>
        <NavLink to={'/Cuisine/Italian'}>
        <div className='flex flex-col justify-center items-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl w-20 active:bg-gradient-to-r from-fuchsia-700 to-neutral-950'>
            <FaPizzaSlice style={pizzaSliceStyle} />
            <h4 className='text-white'>Italian</h4>
        </div>
        </NavLink>
        <NavLink to={'/Cuisine/American'}>
        <div className='flex flex-col justify-center items-center p-4  bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl w-20 active:bg-gradient-to-r from-fuchsia-700 to-neutral-950'>
            <FaHamburger style={pizzaSliceStyle}/>
            <h4 className='text-white'>American</h4>
        </div>
        </NavLink>
        <NavLink to={'/Cuisine/Thai'}>
        <div className='flex flex-col justify-center items-center p-4  bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl w-20 active:bg-gradient-to-r from-fuchsia-700 to-neutral-950'>
            <GiNoodles style={pizzaSliceStyle}/>
            <h4 className='text-white'>Thai</h4>
        </div>
        </NavLink>
        <NavLink to={'/Cuisine/Japanese'}>
        <div className='flex flex-col justify-center items-center p-4  bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl w-20 active:bg-gradient-to-r from-fuchsia-700 to-neutral-950'>
            <GiChopsticks style={pizzaSliceStyle}/>
            <h4 className='text-white'>Japanese</h4>
        </div>
        </NavLink>
            
    </div>
  )
}

export default Category