import React from 'react';

const CartCategory = () => {
	return (
		<div className='grid grid-cols-[2fr_repeat(3,_1fr)] font-extrabold text-center content-center items-center bg-accent text-light text-lg p-4 rounded-t-md h-10'>
			<p>Product</p>
			<p>Price</p>
			<p>Quantity</p>
			<p>Total</p>	
		</div>
	);
};

export default CartCategory;
