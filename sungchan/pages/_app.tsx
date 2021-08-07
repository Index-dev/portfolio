import * as React from 'react';
import { AppProps } from 'next/app';
import { createStore } from 'redux';
import indexReducer from '../modules/indexReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(indexReducer, composeWithDevTools());

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />;
        </Provider>
    );
};

export default App;
