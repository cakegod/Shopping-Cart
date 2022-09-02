import '../styles/global.css';
import Nav from '../components/layout/nav';
import { CartProvider } from '../context/cartContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<CartProvider>
			<Head>
				<title>Cucucakes</title>
			</Head>
			<Nav />
			<Component {...pageProps} />
		</CartProvider>
	);
}

export default MyApp;
