import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useOutletContext } from 'react-router-dom';

const ProductBuyButton = ({ product }) => {
	const addToCart = (product) => {
		if (cart.findIndex((item) => item.name === product.name) === -1) {
			setCart([...cart, product]);
		} else {
			setCart(
				cart.map((item) =>
					item.name === product.name
						? { ...item, quantity: item.quantity + 1 }
						: item,
				),
			);
		}
	};

	const [cart, setCart] = useOutletContext();

	return (
		<button
			className='active:scale-110  transition-all font-bold h-10 w-32 flex justify-center items-center  rounded-lg bg-accent text-light shrink-0 [@media(any-hover:hover){&:hover}]:scale-105'
			onClick={() => addToCart(product)}>
			<MdAddShoppingCart size='20' />
			Add to cart
		</button>
	);
};

export default ProductBuyButton;
