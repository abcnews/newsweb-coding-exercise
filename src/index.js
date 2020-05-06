import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Web from './pages/Web';

import './index.css';

const SwitchBetweenWebAndApp = () => {
	const [showWeb, setShowWeb] = useState(true);

	return (
		<>
			<div className="app-switcher">
				<button onClick={e => setShowWeb(!showWeb)}>Switch between Web and App</button>
			</div>
			<div>
			{showWeb ? <Web /> : <App />}
			</div>
		</>
	)
};

ReactDOM.render(
	<SwitchBetweenWebAndApp />,
	document.getElementById('root')
);

