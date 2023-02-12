import { useRouter } from 'next/router'
import RouterState from '../src/infrastructure/router/router_state'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

export default function App({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient()
  const router = useRouter();

  return <QueryClientProvider client={queryClient}>
          <RouterState router={router.asPath}>
            <Component {...pageProps} />
          </RouterState>
        </QueryClientProvider>
}
