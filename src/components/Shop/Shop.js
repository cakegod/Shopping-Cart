import React from 'react';

import Product from './ProductCard/ProductCard';

const products = [
	{
		name: 'Chocolate Truffle Cake',
		price: 100,
		url: 'https://media.bakingo.com/sq-choco-truffle-cake0005choc-A_1.jpg',
		description:
			'Three layers of chocolate cream filled in between stacks of chocolate cake, and adorned with chocolate icing and glaze chocolate coating.',
		quantity: 1,
	},
	{
		name: 'Butterscotch Cake',
		price: 150,
		url: 'https://media.bakingo.com/sq-butterscotch-cake0003butt-A_1.jpg',
		description:
			'Three layered moist cake filled with butterscotch chips and Vanilla cream. Topped with Butterscotch glaze and white chocolate flakes, adorned with caramel dressing on the sides',
		quantity: 1,
	},
	{
		name: 'Pineapple Cream Cake',
		price: 200,
		url: 'https://media.bakingo.com/sq-pineapple-cake0022pifr-A_2.jpg',
		description:
			'Three layers of pineapple cream filled in between stacks of pineapple cake, and adorned with pineapple icing and glaze pineapple coating.',
		quantity: 1,
	},
	{
		name: 'Black Forest Cake',
		price: 250,
		url: 'https://media.bakingo.com/sq-black-forest-cake0001chbl-A_1.jpg',
		description:
			'Baked with the richness of cocoa and  of fresh vanilla cream, topped with soft chocolate shavings and fresh cherries.',
		quantity: 1,
	},
	{
		name: 'Tropical Mango Cake',
		price: 300,
		url: 'https://media.bakingo.com/sq-mango-cake0020frui-A_2.jpg',
		description:
			'Made of three rich cream layers and mango fillings, this cake is a tantalizing treat. The crest that is frosted with white chocolate shavings offers mango glaze which is made from fresh mango pulp',
		quantity: 1,
	},
	{
		name: 'Chocolate Marble Cake',
		price: 350,
		url: 'https://media.bakingo.com/chocolicious-marble-cake-cake2615choc-A.jpg',
		description:
			'Layered with an alluring fresh cream supported by some chocolate chips all around. It is certain that one who eats once craves for more.',
		quantity: 1,
	},
];

const Shop = () => {
	return (
		<div className='grid 2xl:grid-cols-2 2xl:grid-rows-1 gap-10 p-8 bg-bgc'>
			{products.map((product) => (
				<Product key={product.name} product={product} />
			))}
		</div>
	);
};

export default Shop;
