import Link from 'next/link';

const Home = () => {
	return (
		<div className='flex items-center flex-col max-h-20 p-2'>
			<div className='bg-light md:w-4/6 xl:w-3/6 flex flex-col items-center p-4 md:p-8 box- h-screen md:h-auto text-center rounded-lg shadow-md md:shadow-lg gap-4'>
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
				<button className='btn-primary text-xl'>
					<Link href='shop' className=''>
						Press here to start shopping!
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Home;
