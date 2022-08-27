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
		<div className='flex font-medium text-lg items-center text-center p-3 h-[200px]'>
			<img
				className='h-[140px] w-[140px] shadow border-8 border-bgc border-double rounded-xl'
				src={product.url}
				alt={product.name}
			/>

			<div className="p-4 w-full">
				<h2>{product.name}</h2>
				<div className='flex justify-center items-center'>
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
				<h2 className="font-bold">{product.price}€</h2>
				

			</div>
		</div>
	);
};

export default CartItem;
