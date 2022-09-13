import React from 'react';
import NavLink from './NavLink';
import { MdShoppingCart, MdHomeFilled, MdShoppingBasket } from 'react-icons/md';
import ItemsInCart from './ItemsInCart';
import { useMemo } from 'react';

function NavLinks() {
	const HomeIcon = useMemo(() => {
		return <MdHomeFilled size='20' />;
	}, []);
	const BasketIcon = useMemo(() => {
		return <MdShoppingBasket size='20' />;
	}, []);
	const CartIcon = useMemo(() => {
		return <MdShoppingCart size='20' />;
	}, []);

	return (
		<div className='flex justify-evenly items-center fixed bottom-0 w-full lg:top-auto lg:static lg:flex-row lg:pr-20 bg-accent h-10 lg:justify-end lg:gap-24 lg:h-full z-40'>
			<NavLink icon={HomeIcon} title='Home' url='/' classStyle={null} />
			<NavLink icon={BasketIcon} title='Shop' url='/shop' classStyle={null} />
			<NavLink icon={CartIcon} title='Cart' url='/cart' classStyle={null}>
				<ItemsInCart />
			</NavLink>
		</div>
	);
}

export default NavLinks;
