import '../styles/global.css';
import Nav from '../components/layout/nav';
import { CartProvider } from '../context/cartContext';


function MyApp({ Component, pageProps }) {
	return (
		<CartProvider>
			<Nav />
			<Component {...pageProps} />
		</CartProvider>
	);
}

export default MyApp;
