import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Chakra } from '../theme/'
import { Styles } from '../styles/styles'
import { NavBar } from '../components/'
import { Footer } from '@/container/index'
import { useApollo } from '@/utils/apollo'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
      window.addEventListener('beforeinstallprompt', () => {})
    }
  })

  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <Chakra cookies={pageProps.cookies}>
        <Head>
          <meta name="viewport" content="viewport-fit=cover" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#8257e5" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <NavBar />
        <Component {...pageProps} />
        <Styles />
        <Footer />
      </Chakra >
    </ApolloProvider>
  )
}

export { getServerSideProps } from "../theme";

export default MyApp