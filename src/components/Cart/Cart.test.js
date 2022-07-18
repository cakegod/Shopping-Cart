import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from './Cart';

describe('Cart component', () => {
	it('Cart heading is correct without products on the cart', () => {
		render(<Cart cart={[]} />);
		expect(screen.getByRole('heading').textContent).toMatch(
			/Your Cart is Empty!/i,
		);
	});
});
