import React from 'react';

const CartCategory = () => {
	return (
		<div className='grid grid-cols-[2fr_1fr_1fr] font-bold text-center items-center bg-accent text-light text-xl p-4 rounded-t-md'>
			<p>Product</p>
			<p>Price</p>
			<p>Quantity</p>
		</div>
	);
};

export default CartCategory;
