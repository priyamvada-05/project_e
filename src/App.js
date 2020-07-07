import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/header_navbar/navbar'
import AnalyticsLanding from './component/landing_page/landing';
import ProfileLanding from './component/profile_landing/profile_landing';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Navbar />
      <Switch >

			<Route 
				exact={true} 
				path='/' 
				render={ProfileLanding }
			>
			</Route>

			<Route 
				exact={true} 
				path='/analytics' 
				render={AnalyticsLanding}
			>
			</Route>
		</Switch>
      </BrowserRouter >
    </div>
  );
}

export default App;
