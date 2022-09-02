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
			className='active:shadow-none active:translate-y-[6px] shadow-[0_6px_#9b283d] transition-all font-bold h-10 w-32 flex justify-center items-center my-4 rounded-lg bg-accent text-light shrink-0 '
			onClick={() => addToCart(product)}>
			<MdAddShoppingCart size='20' />
			Add to cart
		</button>
	);
};

export default BuyButton;
