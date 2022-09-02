import Link from 'next/link';

const Home = () => {
	return (
		<div className='flex items-center flex-col '>
			<div className='bg-light sm:w-2/6 flex flex-col items-center p-6 box- h-screen sm:h-auto text-center sm:py-16 sm:mt-6 rounded-lg shadow-lg gap-4'>
				<h2 className='pt-8 pb-4 text-4xl font-bold'>
					Welcome to our cake shop!
				</h2>
				<p className='text-center text-xl pb-4'>
					Our{' '}
					<strong className='underline underline-offset-1 decoration-8 decoration-accent/50'>
						delicious cakes
					</strong>{' '}
					are made fresh daily and are sure to satisfy your sweet tooth! Our
					selection includes a variety of flavors and sizes, so there's
					something for everyone!
				</p>
				<button className='transition-all font-bold h-10 w-60 p-2 box-content flex justify-center items-center  rounded-lg bg-accent text-light shrink-0 text-xl active:shadow-none active:translate-y-[6px] shadow-[0_6px_#9b283d]'>
					<Link href='shop' className=''>
						Press here to start shopping!
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Home;
