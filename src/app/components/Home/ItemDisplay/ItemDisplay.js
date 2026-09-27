
'use client'
import Image from 'next/image'
import React, { useState } from 'react'



const products = [
    {
        id: 1,
        name: "Waffle",
        description: "Waffle with Berries",
        price: 6.50,
        image: "/assets/images/image-waffle-desktop.jpg",
    },

    {
        id: 2,
        name: "Crème Brûlée",
        description: "Vanilla Bean Crème Brûlée",
        price: 7.00,
        image: "/assets/images/image-creme-brulee-desktop.jpg",
    },

    {
        id: 3,
        name: "Macaron",
        description: "Macaron Mix of Five",
        price: 8.00,
        image: "/assets/images/image-macaron-desktop.jpg",
    },

    {
        id: 4,
        name: "Tiramisu",
        description: "Classic Tiramisu",
        price: 5.50,
        image: "/assets/images/image-tiramisu-desktop.jpg",
    },

    {
        id: 5,
        name: "Baklava",
        description: "Pistachio Baklava",
        price: 4.00,
        image: "/assets/images/image-baklava-desktop.jpg",
    },

    {
        id: 6,
        name: "Pie",
        description: "Lemon Meringue Pie",
        price: 5.00,
        image: "/assets/images/image-meringue-desktop.jpg",
    },

    {
        id: 7,
        name: "Cake",
        description: "Red Velvet Cake",
        price: 4.50,
        image: "/assets/images/image-cake-desktop.jpg",
    },

    {
        id: 8,
        name: "Brownie",
        description: "Salted Caramel Brownie",
        price: 5.50,
        image: "/assets/images/image-brownie-desktop.jpg",
    },

    {
        id: 9,
        name: "Panna Cotta",
        description: "Vanilla Panna Cotta",
        price: 6.50,
        image: "/assets/images/image-panna-cotta-desktop.jpg",
    },

]




const ItemDisplay = ({ cart, setCart}) => {

    // Add Cart info

    const addToCart = (product) => {
        const existingproduct = cart.find(
            (item) => item.id === product.id
        );

        if(existingproduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id ?
            { ...item, quantity: item.quantity + 1}:
        item )
            )
        }

        else {
            setCart([...cart, {
                ...product,
                quantity: 1,
            }])
        }
    };

    // Increament Quantity

    const increaseQuantity = (product) => {
        setCart(
            cart.map((item) => item.id === product.id ?
            { ...item, quantity: item.quantity + 1}
        : item )
        )
    };

    // decrease Quantity

    const decreaseQuantity = (product) => {
        setCart(
            cart.map((item) => item.id === product.id ?
            { ...item, quantity: item.quantity - 1}
        : item )
            .filter((item) => item.quantity > 0)
        );
    };


    

  return (

<div className='flex text-align flex-wrap mt-7 items-center justify-center sm:justify-between'>
    
    {products.map((product) => {

     // Check if this particular product is in the cart
        const cartItem = cart.find(
          (item) => item.id === product.id
        );

        // If it is in the cart, get its quantity
        // Otherwise quantity is 0
        const quantity = cartItem ? cartItem.quantity : 0;

   return( 
   <div key={product.id} >
      <div className='w-[300px] '>
            <div className='relative mx-2 '>
                <Image 
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className=' object-cover rounded-xl '
                />

           {quantity === 0 ? (<div onClick={() => addToCart(product)} className='absolute cursor-pointer w-[70%] ml-10 bg-white flex items-center justify-center -mt-6.75 rounded-full border-2 border-amber-500 px-8 py-4'>
                    <Image
                        src="/assets/images/icon-add-to-cart.svg"
                        alt='Cart-Image'
                        width={20}
                        height={10}
                        
                    />

                <p className='font-bold pl-2 text-[15px]'> Add to Cart </p>
                    
            </div>) : (
                <div className='absolute w-[70%] ml-10 bg-amber-700 flex  justify-between -mt-[27px] rounded-full border-2 border-amber-700 px-8 py-4'>
                            
                             <Image src="/assets/images/icon-decrement-quantity.svg"
                                 alt='Decrement quantity'
                                 width={10}
                                 height={10}
                                 className='cursor-pointer'
                                 onClick={() => decreaseQuantity(product)}
                                 />

                            <p className='text-white'>{quantity}</p>

                            <Image src="/assets/images/icon-increment-quantity.svg"
                                 alt='Increment quantity'
                                 width={10}
                                 height={10}
                                 className='cursor-pointer'

                                 onClick={() => increaseQuantity(product)}
                                 />
                 </div>
            )} 


            </div>

        {/* PRODUCT INFORMATION */}
            <div className="mt-12 mb-10">
                <p className="text-gray-500">
                {product.name}
                </p>

                <h2 className="font-bold">
                {product.description}
                </h2>

                <p className=" font-bold text-amber-600">
                ${product.price}
                {product.quantity}
                </p>
            </div>
        
      </div>
    </div>
   )
})}
</div>  

)
}

export default ItemDisplay
