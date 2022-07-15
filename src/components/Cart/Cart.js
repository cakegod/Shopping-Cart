import React from 'react';
import ProductTable from './CartTable/CartTable';

const Cart = () => {
	return (
		<div className='flex flex-col items-center py-8 bg-bgc '>
			<h1 className='text-4xl mb-4 font-bold '>Your cart</h1>
			<div className='xl:w-3/5 w-4/5 text-lg flex flex-col justify-center shadow rounded-md bg-light'>
				<ProductTable />
			</div>
		</div>
	);
};

export default Cart;
