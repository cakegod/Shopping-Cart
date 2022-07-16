import React from 'react';
import ProductBuyButton from './ProductBuyButton';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';

const ProductCard = ({ product }) => {
	return (
		<div className=' md:max-h-60 shadow-md bg-light rounded-md flex flex-col md:flex-row '>
			<img src={product.url} alt='' className='rounded-l-md' />
			<div className='flex flex-col grow p-6 gap-1 justify-between '>
				<ProductName name={product.name} />
				<ProductPrice price={product.price} />
				<ProductBuyButton product={product} />
				<p className=' h-2/6 font-medium'>{product.description}</p>
			</div>
		</div>
	);
};

export default ProductCard;
