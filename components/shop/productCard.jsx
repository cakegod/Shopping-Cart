import BuyButton from './buyButton';

const ProductCard = ({ product }) => {
	return (
		<div className=' md:max-h-72 shadow-md bg-light rounded-md flex flex-col md:flex-row hover:shadow-lg hover:shadow-accent/30 shadow-accent/10 transition-all '>
			<img src={product.url} alt={product.name} className='rounded-l-md' />
			<div className='flex flex-col grow p-6 gap-1 justify-between '>
				<h2 className='text-xl flex font-bold'>{product.name}</h2>
				<span className='text-3xl font-extrabold'>{product.price}€</span>
				<BuyButton product={product} />
				<h3 className=' h-2/6 font-medium grow overflow-auto'>
					{product.description}
				</h3>
			</div>
		</div>
	);
};

export default ProductCard;
