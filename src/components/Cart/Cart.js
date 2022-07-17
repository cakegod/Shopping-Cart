import React from 'react';
import {useOutletContext} from 'react-router-dom';
import CartCheckout from './CartCheckout';
import CartTable from './CartTable';

const Cart = () => {
	const [cart] = useOutletContext();

	return cart.length === 0 ? (
		<h1 className='flex justify-center text-4xl font-bold mb-4 py-8'>
			Your Cart is Empty!
		</h1>
	) : (
		<div className='flex flex-col items-center py-8 bg-bgc '>
			<h1 className='text-4xl mb-4 font-bold '>Your cart</h1>
			<div className='xl:w-3/5 w-[90%] text-lg flex flex-col justify-center shadow rounded-md bg-light'>
				<CartTable />
			</div>
			<CartCheckout cart={cart} />
		</div>
	);
};

export default Cart;
