import React from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

import Main					from './pages/main';
import LK_Expert			from './pages/lk/expert';
import LK_Grant_Giver		from './pages/lk/grant_giver';
import LK_Grant_Recepient	from './pages/lk/grant_recepient';
import LK_Regulator			from './pages/lk/regulator';

export default () => (
	<div id="container">
		<div className="top">
			<div className="top_left">
				<img src="https://pp.userapi.com/c858020/v858020754/e195/VSOS3_nU4_8.jpg" />
			</div>
			<div className="top_right" />
		</div>
		<Switch>
			<Route path="/lk/expert"			component={LK_Expert} />
			<Route path="/lk/grant_giver"		component={LK_Grant_Giver} />
			<Route path="/lk/grant_recepient"	component={LK_Grant_Recepient} />
			<Route path="/lk/regulator"			component={LK_Regulator} />
			<Route path="/"						component={Main} />
		</Switch>
	</div>
);
