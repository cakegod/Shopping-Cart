import { useCallback } from 'react';
import { memo } from 'react';
import { useMemo } from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const Cart = ({ children }) => {
	const [cart, setCart] = useState([]);


	const cartMemo = useMemo(() => cart, [cart]);

	return (
		<CartContext.Provider value={{ cartMemo, setCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const CartProvider = memo(Cart);
