/* eslint-disable jsx-a11y/anchor-is-valid */

import { MdShoppingCart, MdHomeFilled, MdShoppingBasket } from 'react-icons/md';
import Link from 'next/link';
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';

const Nav = () => {
	const { cart } = useContext(CartContext);

	return (
		<nav className='text-lg justify-center md:justify-between flex items-center font-bold h-16  w-full top-0 text-light z-40'>
			<div className='bg-accent w-full h-full flex justify-center items-center shadow-md shadow-accent/30'>
				<Link href='/'>
					<a className=' md:mx-20 uppercase text-3xl md:text-4xl tracking-wider font-extrabold '>
						Cucucakes
					</a>
				</Link>
			</div>
			<div className='flex justify-evenly items-center fixed bottom-0 w-full lg:top-auto lg:static lg:flex-row lg:pr-20 bg-accent h-10 lg:justify-end lg:gap-24 lg:h-full z-40'>
				<div className='flex items-center gap-1 lg:hidden'>
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
						<a className='md:mt-0 flex items-center'>Cart</a>
					</Link>
					<p className='bg-bgc shadow-md text-black font-extrabold rounded-full h-6 md:h-8 w-6 md:w-8 flex justify-center items-center '>
						{cart.reduce((acc, item) => acc + item.quantity, 0)}
					</p>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
