import "../../styles/globals.css";
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from 'react-query/devtools';
import {store,persistor} from '../app/store'
import Layout from "@components/Layout";


export const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider {...{ client }}>
      <Provider {...{ store }}>
        <PersistGate loading={null} {...{ persistor }}>
          <Toaster
            position='top-right'
            reverseOrder={false}
            // toastOptions={{ style: { marginTop: '4.5rem' } }}
          />
          <Layout>
            <Component {...pageProps} />
            {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools />}
          </Layout>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;

