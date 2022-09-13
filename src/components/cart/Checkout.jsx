const Checkout = ({ cart }) => {
	return (
		<div className='flex items-center h-14 justify-between w-full pt-2 gap-2 text-lg'>
			<button className='btn-primary'>Checkout</button>
			<div className='bg-light flex items-center rounded-md h-full p-2'>
				<p className='mx-4 font-medium '>Subtotal</p>
				<p className='mx-4 font-bold flex'>
					{cart.reduce((acc, item) => acc + item.price * item.quantity, 0) +
						'€'}
				</p>
			</div>
		</div>
	);
};

export default Checkout;
