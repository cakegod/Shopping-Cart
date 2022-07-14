import React from 'react';
import BuyButton from './BuyButton';
import Name from './Name';
import Price from './Price';

const Product = ({ url, price, name, description }) => {
	return (
		<div className='h-80 shadow-md text-rose-900 bg-rose-100 shadow-rose-200 rounded-md flex'>
			<img src={url} alt='' className="rounded-md" />
			<div className='flex flex-col grow p-4 justify-between '>
				<Name name={name} />
				<Price price={price} />
				<BuyButton />
        <p className="text-rose-900 h-3/6">{description}</p>
			</div>
		</div>
	);
};

export default Product;

