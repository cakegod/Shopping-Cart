/* eslint-disable jsx-a11y/anchor-is-valid */

import { MdShoppingCart, MdHomeFilled, MdShoppingBasket } from 'react-icons/md';
import Link from 'next/link';
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';

const Nav = () => {
	const { cart } = useContext(CartContext);

	return (
		<nav className='text-lg justify-center sm:justify-between flex items-center font-bold h-16 sticky w-full top-0 text-light bg-accent shadow-md shadow-accent/30'>
			<Link href='/'>
				<a className=' sm:mx-20 uppercase text-3xl sm:text-4xl tracking-wider font-extrabold'>
					Cucucakes
				</a>
			</Link>
			<div className='flex justify-evenly items-center fixed bottom-0 w-full sm:top-auto sm:static sm:flex-row sm:mr-20 bg-accent h-14 sm:justify-end sm:gap-24 '>
				<div className='flex items-center gap-1 sm:hidden'>
					<MdHomeFilled size='20' />
					<Link href='/'>
						<a>Home</a>
					</Link>
				</div>
				<div className='flex items-center gap-1'>
					<MdShoppingBasket size='20' />
					<Link href='/shop'>
						<a>Shop</a>
					</Link>
				</div>
				<div className='flex items-center gap-1'>
					<MdShoppingCart size='20' />
					<Link href='/cart'>
						<a className='sm:mt-0 flex items-center'>Cart</a>
					</Link>
					<p className='bg-bgc shadow-md text-black font-extrabold rounded-full h-6 sm:h-8 w-6 sm:w-8 flex justify-center items-center '>
						{cart.reduce((acc, item) => acc + item.quantity, 0)}
					</p>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
