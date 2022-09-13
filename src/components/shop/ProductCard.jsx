import Image from 'next/future/image';
import BuyButton from './BuyButton';

const ProductCard = ({ product }) => {
	return (
		<div className=' md:max-h-80 shadow-md bg-light rounded-md flex flex-col md:flex-row shadow-accent/30 transition-all duration-500 '>
			<Image
				width='360'
				height='360'
				src={product.url}
				alt={product.name}
				className='rounded-l-md h-full w-full md:max-w-[360px]'
			/>
			<div className='flex flex-col grow p-6 gap-1 justify-between '>
				<h2 className='text-2xl flex font-bold'>{product.name}</h2>
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
