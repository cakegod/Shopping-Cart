import React,{useState} from 'react';
import {Outlet} from 'react-router-dom';
import NavBar from "./components/NavBar";

const App = () => {
	const [cart, setCart] = useState([]);

	return (
		<div className='h-full w-full bg-bgc text-dark'>
			<NavBar cart={cart}/>
			<Outlet context={[cart, setCart]} />
		</div>
	);
};

export default App;
