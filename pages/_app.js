import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side');
    jssStyles && jssStyles.parentElement.removeChild(jssStyles);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
