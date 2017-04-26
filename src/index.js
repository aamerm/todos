// var hello = () => {
// 	alert('hello');
// }

// hello();

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';
import {createStore} from 'redux';
import reducer from './reducer'
import {Provider} from 'react-redux';

const store = createStore(
	reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	// <h1>hello aamer</h1>, 
	// React.createElement('h1', null, 'Hello World'),
	document.getElementById('main')
)


// react - top component has state, that state is passed as props to child components...unidirectional flow
// react+redux - store, given to top component as state, that state is passed as props to child components...unidirectional flow
