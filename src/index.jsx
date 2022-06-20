import React from 'react';
import { render } from 'react-dom';
import { AppProvider } from './context/AppContext';
import Root from './Root';
import { GlobalStyles } from './globalStyles';

// 🍀 Render Components
render(
	<>
		<GlobalStyles />
		<AppProvider>
			<Root />
		</AppProvider>
	</>,
	document.getElementById('root')
);
