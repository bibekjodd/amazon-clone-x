import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      setProgress(100);
    });
    router.events.on('routeChangeStart', () => {
      setProgress(30);
    })
  })
  return (
    <Provider store={store}>
      <SessionProvider>
        <LoadingBar
          // color='rgb(202 138 4)'
          color='rgb(234 179 8)'
          progress={progress}
          waitingTime={200}
          onLoaderFinished={() => setProgress(0)}
        />
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
