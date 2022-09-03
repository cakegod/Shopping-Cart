import { useContext } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { CartContext } from '../../context/cartContext';

const BuyButton = ({ product }) => {
	const { cart, setCart } = useContext(CartContext);

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

	// const [cart, setCart] = useOutletContext();

	return (
		<button
			className='btn-primary '
			onClick={() => addToCart(product)}>
			<MdAddShoppingCart size='20' />
			Add to cart
		</button>
	);
};

export default BuyButton;
