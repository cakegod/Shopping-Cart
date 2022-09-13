import { memo } from 'react';
import { useContext } from 'react';
import CartContent from '../components/cart/CartContent';
import { CartContext } from '../context/cartContext';
import { m, LazyMotion, domAnimation } from 'framer-motion';

const Cart = () => {
	const { cartMemo } = useContext(CartContext);

	return cartMemo.length === 0 ? (
		<h1 className='flex justify-center text-3xl xl:text-4xl font-bold mb-4 py-8 '>
			Your Cart is Empty!
		</h1>
	) : (
		<LazyMotion features={domAnimation}>
			<m.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className='flex flex-cols justify-center xl:pt-8 pb-14 p-4 pattern'>
				<CartContent />
			</m.div>
		</LazyMotion>
	);
};

export default memo(Cart);
