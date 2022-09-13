import React from 'react';
import { memo } from 'react';
import NavLink from './NavLink';
function LogoLink() {
	return (
		<div className='bg-accent w-full h-full flex justify-center items-center shadow-md shadow-accent/30'>
			<NavLink
				url='/'
				title='cucucakes'
				classStyle='md:mx-20 uppercase text-3xl md:text-4xl tracking-wider font-extrabold'
			/>
		</div>
	);
}

export default memo(LogoLink);
