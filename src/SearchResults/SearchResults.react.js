import React from 'react';
import { Button, Item, Segment, Search, Container, Grid, Select, Label, Form } from 'semantic-ui-react';
import './SearchResults.css';
import axios from 'axios';
import IncidentHolder from '../IncidentHolder/IncidentHolder.react';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            phoneNumber:0,        //Initialising state
            searchTerm : "",
            results: [],        //container to hold the results
            loaded: false,      //To determine if the page has loaded or not and will be changed in componentDidMount() method
            hasResults: false   //To determine if the search return any results and if not used to display appropriate message to the user
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
       
    }

   

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({ [name]: value });
      }

      

    onSubmit(e){ //Gets the search results if the search button is clicked
        e.preventDefault();
        axios.get(`http://localhost:5050/getIncidents/${this.state.phoneNumber}`)//url for getting incidents
        .then(res => {
          this.setState({ results:res, loaded:true, });
        });

        console.log(this.state.results);
        console.log(this.state.searchCriteria);
    }

   
    // closeIncident(incidentId){
    //     axios.delete(`http://localhost:5050/removeIncident/${incidentId}`).then(res=>res.data);
    
    // }
    handleCloseIncident(incId){
        confirmAlert({

            title: "Confirm to remove Agent",
            message: "Are you sure you want to delete this agent",
            buttons: [
                {
                    label: "Yes, Close Incident",
                    onClick: () => alert("incident close"+incId)//axios call to close Incident
                                                                //set active to closed in the incident state
                },
                {
                    label: "No, Go Back"
                }
            ]
        })
        
    }

    

    render() {
        return (
            <Segment>
                
                <Form onSubmit={this.onSubmit}>                  {/* Form to get the search parameters */}
                    <Form.Group>
                        <Form.Field>
                            <label>Search Incident</label>        {/* Field to get the search String */}
                            <Form.Input placeholder="Enter Phone Number..." value={this.state.phoneNumber}  name="phoneNumber"
                    onChange={this.handleChange} />
                        </Form.Field>
                    </Form.Group>
                    
                    <Form.Button>Search</Form.Button>
                </Form>
                <Item.Group divided>        {/* Iterator to which displays the incident using the results element from the state */}
                {this.state.loaded? this.state.results.data.map((eachIncident, index)=>{
            return(<IncidentHolder from="agentsearch" key={index} details={eachIncident} onClose={this.handleCloseIncident} />)
            }): <div>No results to display</div>}                 
                </Item.Group>

            </Segment>  //End of Search Results Segment
        );
    }
}

export default SearchResults;