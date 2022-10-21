import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { store } from '../app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
