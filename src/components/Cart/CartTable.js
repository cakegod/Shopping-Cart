import React from 'react';
import {useOutletContext} from 'react-router-dom';
import CartItem from './CartItem';

const CartTable = () => {
	const [cart] = useOutletContext();

	return (
		<>
			<div className='grid grid-cols-[2fr_repeat(3,_1fr)] font-extrabold text-center content-center items-center bg-accent text-light text-lg p-4 rounded-t-md h-10'>
				<h2>Product</h2>
				<h2>Price</h2>
				<h2>Quantity</h2>
				<h2>Total</h2>
			</div>
			<div className='rounded-b-md divide-y-8 divide-dashed divide-bgc'>
				{cart.map((product) => {
					return <CartItem key={product.name} product={product} />;
				})}
			</div>
		</>
	);
};

export default CartTable;
