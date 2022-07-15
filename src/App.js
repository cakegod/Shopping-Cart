import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Outlet, Link } from 'react-router-dom';

const App = () => {
	const [cart, setCart] = useState([]);

	return (
		<div className='h-full w-full bg-bgc text-dark'>
			<nav className='text-xl justify-between flex items-center font-bold h-[10%] text-light bg-accent '>
				<Link
					to='/'
					className='mx-20 uppercase text-4xl tracking-wider font-extrabold'>
					Cucucakes
				</Link>
				<div className='flex mx-20'>
					<Link to='shop' className='mr-10'>
						Shop
					</Link>
					<Link to='cart' className=' flex items-center'>
						<MdShoppingCart size='25' /> Cart{' '}
						{cart.reduce((acc, item) => acc + item.quantity, 0)}
					</Link>
				</div>
			</nav>
			<Outlet context={[cart, setCart]} />
		</div>
	);
};

export default App;
