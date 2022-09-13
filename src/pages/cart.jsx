import {memo} from 'react';
import { useContext } from 'react';
import Checkout from '../components/cart/Checkout';
import Table from '../components/cart/Table';
import { CartContext } from '../context/cartContext';

const Cart = () => {
	const { cartMemo: cart } = useContext(CartContext);

	return cart.length === 0 ? (
		<h1 className='flex justify-center text-3xl xl:text-4xl font-bold mb-4 py-8 '>
			Your Cart is Empty!
		</h1>
	) : (
		<div className='flex flex-cols justify-center xl:pt-8 pb-14 p-4 pattern'>
			<div className='w-full max-w-xl flex flex-col items-center '>
				<h1 className='text-3xl xl:text-4xl mb-2 font-bold '>Your cart</h1>
				<div className='w-full text-lg flex flex-col justify-center shadow rounded-md bg-light '>
					<Table />
				</div>
				<Checkout cart={cart} />
			</div>
		</div>
	);
};

export default memo(Cart);
