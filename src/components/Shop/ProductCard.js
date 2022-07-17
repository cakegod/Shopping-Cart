import React from 'react';
import ProductBuyButton from './ProductBuyButton';

const ProductCard = ({ product }) => {
	return (
		<div className=' md:max-h-60 shadow-lg bg-light rounded-md flex flex-col md:flex-row'>
			<img src={product.url} alt='' className='rounded-l-md' />
			<div className='flex flex-col grow p-6 gap-1 justify-between '>
				<h2 className='text-xl flex font-bold'>{product.name}</h2>
				<span className='text-3xl font-extrabold'>{product.price}€</span>
				<ProductBuyButton product={product} />
				<h3 className=' h-2/6 font-medium grow overflow-auto'>{product.description}</h3>
			</div>
		</div>
	);
};

export default ProductCard;
