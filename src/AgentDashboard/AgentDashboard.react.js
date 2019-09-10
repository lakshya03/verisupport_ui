import React from 'react';
import { Item, Button, Grid, Segment } from 'semantic-ui-react';
import './AgentDashboard.css';
import SearchResults from '../SearchResults/SearchResults.react';
import AgentNav from '../AgentNav/AgentNav.react';
const AgentDashboard = (props) => {

    return (
        <div className='dashboardcontainer_wrapper'>
           <div><AgentNav></AgentNav></div>
           <div>
            <Grid centered>
                <Grid.Column computer={12} mobile={15}>
               <br></br>
               <br></br>
            <SearchResults/>{/* Component which displays the incidents based on the search parameters*/}
                </Grid.Column>
                
                </Grid>
               </div>
               </div>
       
    );

}


export default AgentDashboard;