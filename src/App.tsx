import 'assets/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import Router from 'router';

function App() {
    return (
        <div>
            <Router />
            <ToastContainer />
        </div>
    );
}

export default React.memo(App);
