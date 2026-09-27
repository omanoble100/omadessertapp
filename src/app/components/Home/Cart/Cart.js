import Image from 'next/image'
import React, { useState } from "react"

const Cart = ({cart, setCart}) => {

  const [showConfirmation, setShowConfirmation] = useState(false);

  const totalQuantity = cart.reduce(
    (total,item) => total + item.quantity, 0
  );

  const totalPrice = cart.reduce(
    (total,item) => total + item.quantity * item.price, 0
  );

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart)
  }

  return (
    <div >

      <div key={totalQuantity} className="lg:w-[400px] bg-white rounded-xl p-6 transition-all duration-500">

      <h2 className="text-xl font-bold text-amber-700">
        Your Cart ({totalQuantity})
      </h2>



      {totalQuantity === 0 ? (
      
          <div className="flex flex-col items-center justify-center py-12">

          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt="Empty cart"
            className="w-[200px]"
          />

          <p className="mt-6 text-sm text-gray-500 text-center font-semibold">
            Your added items will appear here
          </p>

        </div>) : (
          
          <div>
              {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between px-5 border-b-2 pb-5 border-gray-200 mt-3 transition-all duration-500 ">
                      <div className='w-[70%] mt-5'>
                        <h2 className='font-bold'>{item.description}</h2>
                        <div className='flex justify-between w-[40%] lg:w-[70%] mt-[4px]'>
                            <h2 className='text-amber-700 font-bold'>{item.quantity}x</h2>
                            <p className='text-gray-400'>@ ${item.price}</p>
                            <p className='text-gray-500 font-bold'>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>

                    {/* Remove from cart */}
                    <div className='rounded-full border p-1 border-gray-300 mt-7 cursor-pointer'>
                      <Image 
                        src="/assets/images/icon-remove-item.svg"
                        width={12} 
                        height={15} 
                        alt='Cancel-imag'
                        onClick={() => removeFromCart(item.id)}
                        />
                    </div>
                </div>
              ))}

              <div>
                   <div className='flex items-center justify-between p-7'>
                       <p className="font-bold text-gray-400">Order Total</p>
                        <p className='font-bold text-[30px]'>${totalPrice}</p>
                    </div>

                    <div className='flex items-center justify-center '>
                        <Image 
                          src="/assets/images/icon-carbon-neutral.svg"
                          width={25}
                          height={5}
                          alt='tree'
                        />

                        <p>This is a <span className='font-bold' >carbon-neutral</span> delivery</p>
                      </div>

                      <div className='text-center mt-10 cursor-pointer bg-amber-700 rounded-3xl p-3' 
                        onClick={() => setShowConfirmation(true)}
                      >
                        <button className='text-white font-bold cursor-pointer'>Confirm Order</button>
                      </div>
                </div>

            {showConfirmation && (

                  <div className="overflow-y-auto fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowConfirmation(false)}>
                        <div className="bg-white w-[90%] max-w-[500px] max-h-[700px] rounded-xl p-6 overflow-y-auto ">
                              <Image 
                                  src="/assets/images/icon-order-confirmed.svg"
                                  alt='Order Confirmed'
                                  width={40}
                                  height={40}
                              />

                              <h2 className='text-3xl font-bold mt-4'>Order Confirmed</h2>
                              <p className='text-gray-500 mt-2'>We hope you enjoy your food</p>

                              <div className='bg-gray-100 rounded-lg p-4 mt-6'>

                                {cart.map((item) => (
                                  <div key={item.id}
                                    className='flex items-center justify-between border-b border-gray-200 py-4 '
                                  >
                                        <div className='flex items-cnter gap-3'> 
                                            <Image 
                                                src={item.image}
                                                alt={item.name}
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <div className='flex-1 text-start pl-5' > 
                                          <h3 className='font-bold text-sm'>{item.description}</h3>

                                          <div className='flex gap-3 text-sm mt-1'>

                                            <span className='text-amber-700 font-bold'>{item.quantity}x</span>
                                            <span className='text-gray-400'>@ ${item.price.toFixed(2)}</span>
                                            

                                          </div>
                                           
                        
                                        </div>

                                        <p className='font-semibold'>${(item.price * item.quantity).toFixed(2)}</p>

                                  </div>

                                  
                                ))}

                                <div className='flex items-center justify-between mt-5'>
                                  <p>Order Total</p>

                                  <p className='font-bold text-[30px]'>${totalPrice.toFixed(2)}</p>
                                </div>

                                
                                    
                              </div>
                                
                                <div className='text-center mt-10 cursor-pointer bg-amber-700 rounded-3xl p-3' 
                                    onClick={() =>{ 
                                      setShowConfirmation(false);
                                      setCart([]);
                                    }}
                                    >
                                      <button className='text-white font-bold cursor-pointer'>Start New Order</button>
                                </div>
                          </div>
                  </div>
               )}
          </div>

         

         
        )
      }

     

        

    </div>

    
    </div>
  )
}

export default Cart
