import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import {
    Button, 
    Grid,
    Header,
    Segment,
    Icon,
  } from 'semantic-ui-react';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


const CustomerDashboard = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
     
    }
   
    return (
        <div >
            <Grid centered columns={1}>
    <Grid.Column>
      <Header as="h2" textAlign="center">
        Customer Incident Details
        <Header.Subheader block>
      Manage your account settings and set email preferences
    </Header.Subheader>
      </Header>
      <Segment>
      
      <Link to="/active">   <Button>
      <Icon.Group size='large' right>
      <Icon name='twitter' />
      <Icon corner name='add' />
    </Icon.Group>
   Add Incident
   </Button></Link>
      </Segment>
      <Segment>
 <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <nav>
     <Link to="/active">  <Tab label="Active"  /></Link>
     <Link to="/closed">  <Tab label="Closed" /></Link>
     </nav>
      </Tabs>
    </Paper>
    </Segment>
    </Grid.Column>

  </Grid>
        </div>
    );

}

export default CustomerDashboard;