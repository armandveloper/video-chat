import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/AuthContext';
import GlobalStyles from '@/styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<GlobalStyles />
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
