import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Here you can see the 'appTitle' prop being passed into the App component! See Example 8
ReactDOM.render(<App appTitle="React Complete Guide"/>, document.getElementById('root'));
registerServiceWorker();
