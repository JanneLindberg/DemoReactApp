import React, {useEffect} from 'react';
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { eventsUpdateSubscription, eventsUpdateUnSubscribe } from '../middleware'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight: 'bold'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));


const EventListView = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const messages = useSelector(state => state.events);
  const [subscribeId, setSubscribeId] = React.useState('_ev');

  useEffect(() => {
    eventsUpdateSubscription(subscribeId);
    
    return function cleanup() {
      eventsUpdateUnSubscribe(subscribeId);
    };
  }, [subscribeId]);

  
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>

      {  messages.map((entry) => (
        
        <ExpansionPanel key={entry.sk} expanded={expanded === `id-${entry.sk}`} onChange={handleChange(`id-${entry.sk}`)}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >

            <Grid container spacing={1}>

              <Grid item xs={3}>
                <Typography className={classes.heading}>{entry.title} {entry.sk} </Typography>
              </Grid>
              <Grid item xs={3}>
                
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.secondaryHeading}>{entry.Description}</Typography>
              </Grid>
              
            </Grid>
            
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{entry.content}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))
      }
    </div>
  );
}

export default EventListView
