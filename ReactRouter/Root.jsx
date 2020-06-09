import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App.jsx';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;