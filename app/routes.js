import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from 'components/About';

export default (
	<Switch>
		<Route exact path="/" component={About} />
	</Switch>
);
