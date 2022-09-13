import ProductCard from '../components/shop/ProductCard';
import { products } from '../products';
import { m, LazyMotion, domAnimation } from 'framer-motion';

const Shop = () => {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className='grid 2xl:grid-cols-2 2xl:grid-rows-1 gap-10 p-4 pb-14 sm:p-8 pattern '>
				{products.map((product) => (
					<ProductCard key={product.name} product={product} />
				))}
			</m.div>
		</LazyMotion>
	);
};

export default Shop;
