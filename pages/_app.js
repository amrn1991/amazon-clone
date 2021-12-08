import '../styles/globals.css';
import { useEffect } from 'react';
import { StoreProvider } from '../utils/context';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side');
    jssStyles && jssStyles.parentElement.removeChild(jssStyles);
  }, []);
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
