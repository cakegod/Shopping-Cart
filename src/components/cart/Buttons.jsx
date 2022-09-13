import React from 'react';
import { memo } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
function Buttons({ product }) {
	const { cartMemo, setCart } = useContext(CartContext);

	const increaseQuantity = () => {
		setCart(
			cartMemo.map((item) => {
				if (item.name === product.name) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			}),
		);
	};
	const decreaseQuantity = () => {
		if (product.quantity > 1) {
			setCart(
				cartMemo.map((item) => {
					if (item.name === product.name) {
						return { ...item, quantity: item.quantity - 1 };
					}
					return item;
				}),
			);
		} else setCart(cartMemo.filter((item) => item.name !== product.name));
	};
	return (
		<div className='flex justify-center items-center '>
			<button
				className='h-6 w-6 bg-accent text-light font-bold rounded-full m-2 flex justify-center items-center'
				onClick={decreaseQuantity}>
				-
			</button>
			<h2>{product.quantity}</h2>
			<button
				className='h-6 w-6 bg-accent text-light font-bold rounded-full m-2 flex justify-center items-center'
				onClick={increaseQuantity}>
				+
			</button>
		</div>
	);
}

export default memo(Buttons);
