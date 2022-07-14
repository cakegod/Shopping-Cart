import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => {
	return (
		<div className='bg-rose-50 h-full w-full '>
			<nav className='text-xl justify-between flex items-center text-rose-900 font-bold h-[10%] border-b border-rose-200'>
				<Link to='/' className='mx-20 uppercase text-3xl tracking-wider'>
					Cucucakes
				</Link>
				<Link to='shop' className='mx-20'>
					Shop
				</Link>
				<Link to='cart' className='mx-20'>
					Cart
				</Link>
			</nav>
			<Outlet />
		</div>
	);
};

export default App;
