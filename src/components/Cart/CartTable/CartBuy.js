import React from 'react';
import { useOutletContext } from 'react-router-dom';

const CartBuy = () => {
	const [cart] = useOutletContext();

	return (
		<>
			{/* <div className='flex justify-end items-center bg-accent h-14 rounded-md text-light'>
				<p className='mx-4 text-xl font-bold'>TOTAL</p>
				<p className='mx-4 text-xl font-bold'>
					{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}€
				</p>
				<button className='w-48 shadow-none text-light text-xl font-bold h-14 rounded-md bg-accent'>
					Proceed to checkout
				</button>
			</div> */}
		</>
	);
};

export default CartBuy;
