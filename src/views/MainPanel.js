import React, {useState} from 'react';
import { useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import MoreIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import { createLocation, updateLocation, setMessageCount } from '../store/actions';
import Checkbox from '@material-ui/core/Checkbox';

import { RefreshIcon, CloudIcon, ActionIcon } from '../components/icons'

import {
  SettingsDialog,
  MessageDialog,
  Suggestions,
  NotificationBadge
} from '../components';

import EventListView from './EventListView';
import { AppConsumer } from '../AppContext.js';


const useStyles = makeStyles(theme => ({
  root: {
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    width: '99%',
    height: '100%',
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 50,
    background: theme.palette.background,
    color: theme.palette.secondary.paper,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -50,
    left: 0,
    right: 0,
    margin: '0 auto',
  },

}));


const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.root} variant="h5" gutterBottom >
        <AppConsumer>
          {(context) => (
            <div>{context.name}</div>
          )}
        </AppConsumer>
      </Typography>
      <hr />
    </>
  )
};



const MainPanel = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const [anchorEl, setAnchorEl] = useState(null);

  const [showMessageDialog, setMessageDialog] = useState(false);

//  const dlgOpen = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeMessageDialog = () => {
    setMessageDialog(false);
  }

  const openMessageDialog = () => {
    setMessageDialog(true);
  }

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Paper square className={classes.paper}>
          <Header />
          <EventListView />
          <MessageDialog showmodal={showMessageDialog} closeModal={closeMessageDialog} />
        </Paper>

        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <NotificationBadge/>
            <Fab color="secondary" aria-label="Add" className={classes.fabButton} onClick={openMessageDialog}>
              <AddIcon />
            </Fab>
            <div className={classes.grow} />
            <CloudIcon/>
            <RefreshIcon />
            <ActionIcon icon={<SettingsOutlinedIcon/>} tooltipText="Settings" Action={SettingsDialog} />
            <Suggestions />
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default MainPanel;
