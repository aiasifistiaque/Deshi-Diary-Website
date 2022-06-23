import 'semantic-ui-css/semantic.min.css';
import '../styles/styles.css';
import { store } from '../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
