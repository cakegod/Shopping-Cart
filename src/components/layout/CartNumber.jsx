import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

function CartNumber() {
	const { cartMemo } = useContext(CartContext);
	return (
		<p className='bg-bgc shadow-md text-black font-extrabold rounded-full h-6 md:h-8 w-6 md:w-8 flex justify-center items-center '>
			{cartMemo.reduce((acc, item) => acc + item.quantity, 0)}
		</p>
	);
}

export default CartNumber;
