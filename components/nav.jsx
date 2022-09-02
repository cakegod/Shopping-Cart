/* eslint-disable jsx-a11y/anchor-is-valid */

import { MdShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';

const Nav = () => {
	const { cart } = useContext(CartContext);

	return (
		<nav className='text-lg justify-center sm:justify-between flex items-center font-bold h-16 sticky w-full top-0 sm:pl-20 text-light bg-accent '>
			<Link href='/'>
				<a className=' sm:mx-20 uppercase text-3xl sm:text-4xl tracking-wider font-extrabold'>
					Cucucakes
				</a>
			</Link>
			<div className='flex justify-center items-center sm:w-auto w-full fixed bottom-0 sm:top-auto gap-16 sm:static sm:flex-row sm:mr-20 bg-accent h-10'>
				<Link href='/shop'>
					<a>Shop</a>
				</Link>
				<div className='flex items-center'>
					<MdShoppingCart size='20' />
					<Link href='/cart'>
						<a className='sm:mt-0 flex items-center'>Cart</a>
					</Link>
					<p className='bg-dark rounded-full h-6 sm:h-8 w-6 sm:w-8 flex justify-center items-center ml-1'>
						{cart.reduce((acc, item) => acc + item.quantity, 0)}
					</p>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
