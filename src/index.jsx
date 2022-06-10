import React from 'react';
import { render } from 'react-dom';
import { AppProvider } from './context/AppContext';

// root component
import Root from './Root';
// styles
import { GlobalStyles } from './globalStyles';

// Rendering the Root component, which is the top level component of our application.
render(
	<>
		<GlobalStyles />
		<AppProvider>
			<Root />
		</AppProvider>
	</>,
	document.getElementById('root')
);
