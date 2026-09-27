"use client"
import React, { useState } from 'react'
import ItemDisplay from './ItemDisplay/ItemDisplay'
import Cart from './Cart/Cart'

const Home = () => {

  const [cart, setCart] = useState([]);
  return (
    <div className='w-[90%] mx-auto '>
     
     <div className='mt-35 flex justify-between flex-col lg:flex-row'>
        
        {/* Desserts display */}
        <div>
            <h1 className='font-bold text-4xl '>Desserts</h1>
            
            <ItemDisplay cart={cart} setCart ={setCart} />
        </div>
        
        {/* Cart Section */}

        <div>
          <Cart cart = {cart} setCart={setCart} />
        </div>
     </div>
    </div>
  )
}

export default Home
