import React from 'react';
import CartList from './CartList';

const Cart = () => {
	return (
		<div className='flex flex-col items-center py-8  '>
			<h1 className='text-3xl mb-2 font-bold text-rose-900'>Your cart</h1>
			<div className='xl:w-3/5 w-4/5 text-lg bg-rose-50 flex flex-col justify-center shadow shadow-rose-200 rounded-md'>
				<CartList />
			</div>
		</div>
	);
};

export default Cart;
