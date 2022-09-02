const Checkout = ({ cart }) => {
	return (
		<div className='flex items-center h-14 justify-between w-full pt-2 gap-2'>
			<button className='bg-accent h-full w-32 p-2 rounded-md font-extrabold text-light active:shadow-none active:translate-y-[6px] shadow-[0_6px_#9b283d] transition-all'>
				Checkout
			</button>
			<div className='bg-light flex items-center rounded-md h-full p-2'>
				<p className='mx-4 text-xl font-medium '>Subtotal</p>
				<p className='mx-4 text-xl font-bold flex'>
					{cart.reduce((acc, item) => acc + item.price * item.quantity, 0) +
						'€'}
				</p>
			</div>
		</div>
	);
};

export default Checkout;