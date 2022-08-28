import React from 'react';

const CartCheckout = ({ cart }) => {
	return (
		<div className='flex items-center bg-bgc h-14 justify-between w-full pt-2 gap-2'>
      <button className="bg-accent h-full w-32 p-2 rounded-md font-extrabold text-light active:scale-105 [@media(any-hover:hover){&:hover}]:scale-105  transition-all">Checkout</button>
			<div className="bg-light flex items-center rounded-md h-full p-2">
        <p className='mx-4 text-xl font-medium '>Subtotal</p>
        <p className='mx-4 text-xl font-bold flex'>
          {cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + "€"}
        </p>
      </div>
		</div>
	);
};

export default CartCheckout;
