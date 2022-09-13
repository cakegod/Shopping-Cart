import { memo, useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import Checkout from './Checkout';
import Item from './Item';

const Table = () => {
	const { cartMemo } = useContext(CartContext);

	return (
		<div className='w-full max-w-xl flex flex-col items-center '>
			<h1 className='text-3xl xl:text-4xl mb-2 font-bold '>Your cart</h1>
			<div className='w-full text-lg flex flex-col justify-center shadow rounded-md bg-light '>
				<div className='grid grid-cols-[2fr_repeat(3,_1fr)] font-extrabold text-center content-center items-center bg-accent text-light text-lg rounded-t-md h-1'></div>
				<div className='rounded-b-md divide-y-8 divide-dashed divide-bgc'>
					{cartMemo.map((product) => {
						return <Item key={product.name} product={product} />;
					})}
				</div>
			</div>
			<Checkout cart={cartMemo} />
		</div>
	);
};

export default memo(Table);
