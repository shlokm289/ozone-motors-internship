import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import NavComponent from './NavComponent';
import AddData from './AddData';
import UpdateData from './UpdateData';
import DeleteData from './DeleteData';

const Main = () => {
	return(
		<>
			<NavComponent />
			<div className="container">
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={AddData} />
						<Route path='/update' component={UpdateData} />
						<Route path='/delete' component={DeleteData} />
					</Switch>
				</BrowserRouter>
			</div>
		</>
	)
}

export default Main;