import { useContext } from 'react';
import Checkout from '../components/cart/checkout';
import Table from '../components/cart/table';
import { CartContext } from '../context/cartContext';

const Cart = () => {
	const { cart } = useContext(CartContext);

	return cart.length === 0 ? (
		<h1 className='flex justify-center text-xl xl:text-3xl font-bold mb-4 py-8 '>
			Your Cart is Empty!
		</h1>
	) : (
		<div className='flex flex-cols justify-center xl:pt-8 pb-12  pattern'>
			<div className='w-96 flex flex-col items-center '>
				<h1 className='text-2xl xl:text-4xl mb-2 font-bold '>Your cart</h1>
				<div className='w-full text-lg flex flex-col justify-center shadow rounded-md bg-light '>
					<Table />
				</div>
				<Checkout cart={cart} />
			</div>
		</div>
	);
};

export default Cart;
