import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {ReactQueryDevtools} from "react-query/devtools"
import { QueryClient, QueryClientProvider } from 'react-query';
import 'aos/dist/aos.css';
import { store } from './store/index';
import './servise/i18next/i18next'
import './index.css';
import App from './App';


const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <App />
    </Provider>
    <ReactQueryDevtools />
    </QueryClientProvider>
   

    
  </React.StrictMode>
);


