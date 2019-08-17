import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import './index.css';
import * as serviceWorker from './js/serviceWorker';
import AppState from './context/appState';

ReactDOM.render(
	<AppState>
		<App />
	</AppState>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
