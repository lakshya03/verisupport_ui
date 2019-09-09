import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Register from '../Register/Register.react';
import LoginPage from '../LoginPage/LoginPage.react';
import ActiveIncident from '../ActiveIncident/ActiveIncident.react';
import ClosedIncident from '../ClosedIncident/ClosedIncident.react';
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard.react';
import Incident from '../Incident/Incident.react';
import HomePage from '../HomePage/HomePage.react';

const Navigation = () => {
    return (
        <div className="Navigation">
       
            <Switch>
            <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/incident" component={CustomerDashboard}></Route>
                <Route path="/active" component={ActiveIncident}></Route>
                <Route path="/closed" component={ClosedIncident}></Route>
                <Route exact path="/login" component={LoginPage}></Route>
                <Route exact path="/addIncident" component={Incident}></Route>

            </Switch>

            
           
           
        </div>
    );

}

export default Navigation;