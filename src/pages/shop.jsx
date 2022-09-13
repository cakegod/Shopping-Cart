import ProductCard from '../components/shop/ProductCard';
import { products } from '../products';

const Shop = () => {
	return (
		<div className='grid 2xl:grid-cols-2 2xl:grid-rows-1 gap-10 p-4 pb-14 sm:p-8 pattern '>
			{products.map((product) => (
				<ProductCard key={product.name} product={product} />
			))}
		</div>
	);
};

export default Shop;
