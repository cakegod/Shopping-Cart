import React from 'react';

const CartItem = ({ product }) => {
	return (
		<div className='grid grid-cols-[2fr_1fr_1fr] font-medium text-xl items-center text-center p-4'>
			<div className='flex items-center gap-5'>
				<img
					className='h-[180px] w-[180px] shadow border-8 border-bgc border-double rounded-xl'
					src={product.url}
					alt={product.name}
				/>
				<p>{product.name}</p>
			</div>
			<p>{product.price}€</p>
			<p>{product.quantity}</p>
		</div>
	);
};

export default CartItem;
