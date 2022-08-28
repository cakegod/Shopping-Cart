import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Cart from './components/Cart/Cart';
import Home from './components/Home';
import Shop from './components/Shop/Shop';

const RouterSwitch = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
				<Route index element={<Home />} />
					<Route path='/shop' element={<Shop />}></Route>
					<Route path='/cart' element={<Cart />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RouterSwitch;
