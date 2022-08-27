import React from 'react';
import {useOutletContext} from 'react-router-dom';
import CartCheckout from './CartCheckout';
import CartTable from './CartTable';

const Cart = () => {
	const [cart] = useOutletContext();

	return cart.length === 0 ? (
		<h1 className='flex justify-center text-xl xl:text-3xl font-bold mb-4 py-8'>
			Your Cart is Empty!
		</h1>
	) : (
		<div className='flex flex-cols justify-center xl:pt-8 pb-12 m-2 bg-bgc '>
			<div className='w-96 flex flex-col items-center bg-bgc 	'>
				<h1 className='text-2xl xl:text-4xl mb-2 font-bold '>Your cart</h1>
				<div className='w-full text-lg flex flex-col justify-center shadow rounded-md bg-light '>
					<CartTable />
				</div>
				<CartCheckout cart={cart} />
			</div>
		</div>
	);
};

export default Cart;
