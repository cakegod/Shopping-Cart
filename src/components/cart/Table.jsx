import { memo, useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import Item from './Item';

const Table = () => {
	const { cartMemo } = useContext(CartContext);

	return (
		<>
			<div className='grid grid-cols-[2fr_repeat(3,_1fr)] font-extrabold text-center content-center items-center bg-accent text-light text-lg rounded-t-md h-1'></div>
			<div className='rounded-b-md divide-y-8 divide-dashed divide-bgc'>
				{cartMemo.map((product) => {
					return <Item key={product.name} product={product} />;
				})}
			</div>
		</>
	);
};

export default memo(Table);
