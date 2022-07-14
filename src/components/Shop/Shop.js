import React from 'react';

import Product from './Product';

const Shop = () => {
	return (
		<div className='grid grid-cols-3 grid-rows-1 gap-10 p-16'>
			<Product
				name='Chocolate Truffle Cake'
				price='100'
				url='https://media.bakingo.com/sq-choco-truffle-cake0005choc-A_1.jpg'
				description='Three layers of chocolate cream filled in between stacks of chocolate cake, and adorned with chocolate icing and glaze chocolate coating.'
			/>
			<Product
				name='Butterscotch Cake'
				price='150'
				url='https://media.bakingo.com/sq-butterscotch-cake0003butt-A_1.jpg'
				description='Three layered moist cake filled with butterscotch chips and Vanilla cream. Topped with Butterscotch glaze and white chocolate flakes, adorned with caramel dressing on the sides'
			/>
			<Product
				name='Pineapple Cream Cake'
				price='200'
				url='https://media.bakingo.com/sq-pineapple-cake0022pifr-A_2.jpg'
				description='Three layered pineapple flavoured cake filled with whipped cream and pineapple fillings. Topped with pineapple slices, chocolate flakes and a further adorned with cherries.
        '
			/>
		</div>
	);
};

export default Shop;
