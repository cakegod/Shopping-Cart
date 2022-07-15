import React from 'react';
import BuyButton from './BuyButton';
import Name from './Name';
import Price from './Price';

const Product = ({ product }) => {
	return (
		<div className=' h-80 shadow-md text-rose-900 bg-rose-100 shadow-rose-200 rounded-md flex border border-rose-200'>
			<img src={product.url} alt='' className='rounded-l-md' />
			<div className='flex flex-col grow p-6 justify-between '>
				<Name name={product.name} />
				<Price price={product.price} />
				<BuyButton product={product}  />
				<p className='text-rose-900 h-3/6'>{product.description}</p>
			</div>
		</div>
	);
};

export default Product;
