// var hello = () => {
// 	alert('hello');
// }

// hello();

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';

ReactDOM.render(
	<App />,
	// <h1>hello aamer</h1>, 
	// React.createElement('h1', null, 'Hello World'),
	document.getElementById('main')
	);