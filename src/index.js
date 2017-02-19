import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import App from './components/App';
import { BrowserRouter, Miss, Match } from 'react-router';

import StorePicker from './components/StorePicker';

const Root = () => {
	return(

		<BrowserRouter>
			<div>
				<Match exactly pattern='/' component={StorePicker} />
				<Match exactly pattern="/store/:storid" component={App} />  
			</div>
		</BrowserRouter>

		)
}

render(<Root />, document.getElementById('main'))
