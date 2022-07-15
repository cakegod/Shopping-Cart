import React from 'react';
import { useOutletContext } from 'react-router-dom';

const CartItem = ({ product }) => {
	const [cart, setCart] = useOutletContext();

	const increaseQuantity = () => {
		setCart(
			cart.map((item) => {
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
				cart.map((item) => {
					if (item.name === product.name) {
						return { ...item, quantity: item.quantity - 1 };
					}
					return item;
				}),
			);
		} else setCart(cart.filter((item) => item.name !== product.name));
	};

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
			<div className='flex justify-center items-center'>
				<button
					className='h-6 w-6 bg-accent text-light font-bold rounded-full m-2 flex justify-center items-center'
					onClick={decreaseQuantity}>
					-
				</button>
				<p>{product.quantity}</p>
				<button
					className='h-6 w-6 bg-accent text-light font-bold rounded-full m-2 flex justify-center items-center'
					onClick={increaseQuantity}>
					+
				</button>
			</div>
		</div>
	);
};

export default CartItem;
