import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CartItem from './CartItem';

const CartRows = () => {
	const [cart] = useOutletContext();

	return (
		<div className='rounded-b-md divide-y-8 divide-dashed divide-bgc'>
			{cart.map((product) => {
				return <CartItem key={product.name} product={product} />;
			})}
			{/* <div>{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}€</div> */}
		</div>
	);
};

export default CartRows;
