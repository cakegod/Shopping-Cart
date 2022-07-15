import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CartItem from './CartItem';

const CartList = () => {
	const [cart, setCart] = useOutletContext();
	return (
		<>
      <div className="grid grid-cols-[2fr_1fr_1fr] font-bold text-center items-center text-rose-900 bg-rose-200 p-4 rounded-t-lg">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
      </div>
			<div className="divide-y-2 divide-rose-200 rounded-b-lg">
        {cart.map((product) => {
          return <CartItem key={product.name} product={product}/>;
        })}
              {/* <div>{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}€</div> */}
      </div>
		</>
	);
};

export default CartList;
