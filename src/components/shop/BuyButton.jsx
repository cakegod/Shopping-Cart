import { memo, useMemo } from 'react';
import { useContext } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { CartContext } from '../../context/cartContext';

const BuyButton = ({ product }) => {
	const { cartMemo, setCart } = useContext(CartContext);

	const addToCart = (product) => {
		if (cartMemo.findIndex((item) => item.name === product.name) === -1) {
			setCart([...cartMemo, product]);
		} else {
			setCart(
				cartMemo.map((item) =>
					item.name === product.name
						? { ...item, quantity: item.quantity + 1 }
						: item,
				),
			);
		}
	};

	const Icon = useMemo(() => {
		return <MdAddShoppingCart size='20' />;
	}, []);

	return (
		<button className='btn-primary ' onClick={() => addToCart(product)}>
			{Icon}
			Add to cart
		</button>
	);
};

export default memo(BuyButton);
