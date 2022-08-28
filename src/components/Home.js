import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
	return (
		<div className='flex items-center flex-col'>
			<h2 className='pt-8 pb-4 text-3xl font-bold'>Welcome to cucucakes!</h2>
			<p className='text-center pb-4'>
				Here we sell the most succulents cakes ever made on earth!
			</p>
			<button className='active:scale-110 transition-all font-bold h-10 w-60 p-2 box-content flex justify-center items-center  rounded-lg bg-accent text-light shrink-0 [@media(any-hover:hover){&:hover}]:scale-105'>
      <Link to='shop' className=''>
						Press here to start shopping!
					</Link>
			</button>
		</div>
	);
};

export default Home;
