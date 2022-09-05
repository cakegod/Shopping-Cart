import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import Item from './item';

const Table = () => {
	const { cart } = useContext(CartContext);

	return (
		<>
			<div className='grid grid-cols-[2fr_repeat(3,_1fr)] font-extrabold text-center content-center items-center bg-accent text-light text-lg rounded-t-md h-1'></div>
			<div className='rounded-b-md divide-y-8 divide-dashed divide-bgc'>
				{cart.map((product) => {
					return <Item key={product.name} product={product} />;
				})}
			</div>
		</>
	);
};

export default Table;
