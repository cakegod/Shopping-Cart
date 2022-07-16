import React from 'react';

const CartCheckout = ({ cart }) => {
	return (
		<div className='flex justify-end items-center bg-bgc w-3/5 h-14 gap-2'>
      <button className="bg-accent p-2 rounded-md font-extrabold text-light">Proceed to checkout</button>
			<div className="bg-light flex p-2 rounded-md">
        <p className='mx-4 text-xl font-medium'>Total</p>
        <p className='mx-4 text-xl font-bold'>
          {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}€
        </p>
      </div>
		</div>
	);
};

export default CartCheckout;
