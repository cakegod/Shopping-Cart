import Image from 'next/future/image';
import { memo } from 'react';
import { useMemo } from 'react';
import Buttons from './Buttons';
import { motion } from 'framer-motion';

const Item = ({ product }) => {
	const MemoImage = useMemo(() => {
		return (
			<Image
				className='h-[140px] w-[140px] border-8 border-bgc border-double rounded-xl'
				width='360'
				height='360'
				src={product.url}
				alt={product.name}
			/>
		);
	}, [product.name, product.url]);

	return (
		<motion.div
			animate={{ x: 0 }}
			transition={{ ease: 'easeOut', duration: 2 }}
			initial={true}
			className='flex font-medium text-lg items-center text-center p-3 h-[200px]'>
			{MemoImage}
			<div className='p-4 w-full h-full flex flex-col justify-center items-center'>
				<h2 className='font-bold'>{product.name}</h2>
				<Buttons product={product}>
					<h2>{product.quantity}</h2>
				</Buttons>
				<h2 className=''>{product.price + '€ / unit'}</h2>
			</div>
		</motion.div>
	);
};

export default memo(Item);
