import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NavBar = ({ cart }) => {
	return (
		<nav className='text-lg justify-center sm:justify-between flex items-center font-bold h-[10%] text-light bg-accent '>
			<Link
				to='/'
				className=' sm:mx-20 uppercase text-3xl sm:text-4xl tracking-wider font-extrabold'>
				<h1>Cucucakes</h1>
			</Link>
			<div className='flex justify-center sm:items-center sm:w-auto  items-end w-full fixed top-0 left-0 h-full sm:top-full sm:my-20 sm:static sm:flex-row sm:mr-20'>
				<div className="flex h-10 bg-accent justify-center items-center w-full">
					<Link to='shop' className='mr-10'>
						<h1>Shop</h1>
					</Link>
					<Link to='cart' className='sm:mt-0 flex items-center'>
						<div className='flex items-center'>
							<MdShoppingCart size='20' />
							<h1>Cart</h1>
						</div>
						<div className='bg-dark rounded-full h-6 sm:h-8 w-6 sm:w-8 flex justify-center items-center ml-1'>
							{cart.reduce((acc, item) => acc + item.quantity, 0)}
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
