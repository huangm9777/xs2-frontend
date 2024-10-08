import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import {  RouterProvider } from 'react-router-dom';
import router from './router'
import 'normalize.css'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    // <App />
    <Provider store={store}>
        <RouterProvider router={ router}></RouterProvider>
        {/* <App /> */}
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
