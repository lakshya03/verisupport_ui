import React from 'react';

import './IncidentHolder.css';

class IncidentHolder extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit=(e)=> {
        e.preventDefault();
       
        axios
          .put(`http://localhost:2020/incident-management-service/addIncident`, this.state.addIncident)
          .then(res => {
            console.log(res);
            console.log(res.data);
          });
      }

    render() {
        return (
            <Item>
        <Item.Content>
            {/* <Item.Header>{props.details.comments}</Item.Header> */}
            <Item.Description>
                    <p>Description : {props.details.comments}</p>
                    <p>Issue Type: {props.details.incidentType}</p>
                    <p>Issue Priority: {props.details.priority}</p>
                    <Form >
                        <Form.Field
                    label="Change Priority"
                    control="select"
                    name="priority"
                    
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </Form.Field>
                  <Button color="red"  >
                  Update
                </Button></Form>
            </Item.Description>
            {/* Logic to Display close and cancel if the incident is active */}
            {(props.details.status==='Active')? (<Item.Extra>
                <Button color="blue" onClick={() => props.onClose(props.details.incidentId)}>Close Incident</Button>
                {/* <Button color="red" onClick={() => props.onCancel(props.details.incidentId)}>Cancel Incident</Button> */}
            </Item.Extra>):(<Item.Extra>This incident is closed</Item.Extra>)}    
        </Item.Content>
    </Item>  
);
            }
}

export default IncidentHolder;