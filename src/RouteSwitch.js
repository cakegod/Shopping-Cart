import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

const RouterSwitch = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
				<Route path='/shop' element={<Shop />}></Route>
				<Route path='/cart' element={<Cart />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RouterSwitch;
