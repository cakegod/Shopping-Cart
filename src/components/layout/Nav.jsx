/* eslint-disable jsx-a11y/anchor-is-valid */

import { memo } from 'react';
import LogoLink from './LogoLink';
import NavLinks from './NavLinks';

const Nav = () => {
	return (
		<nav className='text-lg justify-center md:justify-between flex items-center font-bold h-16  w-full top-0 text-light z-40'>
			<LogoLink />
			<NavLinks />
		</nav>
	);
};

export default memo(Nav);
