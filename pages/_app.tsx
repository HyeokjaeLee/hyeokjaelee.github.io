// pages/_app.tsx

import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App