import * as React from 'react';
import { AppProps } from 'next/app';
import { createStore } from 'redux';
import indexReducer from '../modules/indexReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import Head from 'next/head';

const store = createStore(indexReducer, composeWithDevTools());

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>김성찬의 Portfolio</title>
                <link rel="icon" type="image/x-icon" href="/image/favicon.png"></link>
                <link
                    type="text/css"
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
                />
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
};

export default App;
