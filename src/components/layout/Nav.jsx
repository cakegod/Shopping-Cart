/* eslint-disable jsx-a11y/anchor-is-valid */

import { MdShoppingCart, MdHomeFilled, MdShoppingBasket } from 'react-icons/md';
import NavLink from './NavLink';
import CartNumber from './CartNumber';
import { memo } from 'react';
import { useMemo } from 'react';

const Nav = () => {
	const HomeIcon = useMemo(() => {
		return <MdHomeFilled size='20' />;
	}, []);
	const BasketIcon = useMemo(() => {
		return <MdShoppingBasket size='20' />;
	}, []);
	const CartIcon = useMemo(() => {
		return <MdShoppingCart size='20' />;
	}, []);

	const links = [
		{
			url: '/',
			title: 'Home',
			icon: HomeIcon,
		},
		{
			url: '/shop',
			title: 'Shop',
			icon: BasketIcon,
		},
		{
			url: '/cart',
			title: 'Cart',
			icon: CartIcon,
		},
	];

	return (
		<nav className='text-lg justify-center md:justify-between flex items-center font-bold h-16  w-full top-0 text-light z-40'>
			<div className='bg-accent w-full h-full flex justify-center items-center shadow-md shadow-accent/30'>
				<NavLink
					url='/'
					title='cucucakes'
					classStyle='md:mx-20 uppercase text-3xl md:text-4xl tracking-wider font-extrabold'
				/>
			</div>
			<div className='flex justify-evenly items-center fixed bottom-0 w-full lg:top-auto lg:static lg:flex-row lg:pr-20 bg-accent h-10 lg:justify-end lg:gap-24 lg:h-full z-40'>
				{links.map((link) => {
					return (
						<NavLink
							key={link.title}
							title={link.title}
							url={link.url}
							icon={link.icon}
							classStyle={null}>
							{link.title === 'Cart' && <CartNumber />}
						</NavLink>
					);
				})}
			</div>
		</nav>
	);
};

export default memo(Nav);
