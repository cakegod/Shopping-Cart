import Image from 'next/future/image';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const Item = ({ product }) => {
	const { cart, setCart } = useContext(CartContext);

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
			<Image
				className='h-[140px] w-[140px] border-8 border-bgc border-double rounded-xl'
				width='360'
				height='360'
				src={product.url}
				alt={product.name}
			/>

			<div className='p-4 w-full h-full flex flex-col justify-center items-center'>
				<h2 className='font-bold'>{product.name}</h2>
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
				<h2 className=''>{product.price + '€ / unit'}</h2>
			</div>
		</div>
	);
};

export default Item;
