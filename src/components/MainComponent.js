import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import NavComponent from './NavComponent';
import AddData from './AddData';
import UpdateData from './UpdateData';
import DeleteData from './DeleteData';
import DatabaseView from './DatabaseView';

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
						<Route path='/view' component={DatabaseView} />
					</Switch>
				</BrowserRouter>
			</div>
		</>
	)
}

export default Main;