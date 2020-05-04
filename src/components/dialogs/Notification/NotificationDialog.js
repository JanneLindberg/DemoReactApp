import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';

import InboxIcon from '@material-ui/icons/Inbox';
import CloseIcon from '@material-ui/icons/Close'

import MyDialogAction from '../MyDialogAction'

import { clearNotification } from '../../../store/actions'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '95%',
    spacing: 2,
  },
  dialogPaper: {
    [theme.breakpoints.down(4380)]: {
      margin: 2,
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    width: '100%'
  },
  entry: {
    marginTop: theme.spacing(3),
    width: '100%',
    borderBottom: '1px'
  }
}));


const NotificationDialog = ({showModal, closeModal}) => {

  const classes = useStyles();

  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();

  const handleClose = () => {
    closeModal();
  };

  return (
    <Dialog
      fullScreen={false}
      classes={{ paper: classes.dialogPaper }}
      open={showModal}
      onClose={closeModal}
      fullWidth={true}
      maxWidth = {'sm'}
      aria-labelledby="form-dialog-title" >
      <DialogTitle id="form-dialog-title">Notifications</DialogTitle>

      <DialogContent className={classes.content} >

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>

            <List component="nav" aria-label="main mailbox folders">
              {
                notifications && 
                  notifications.msg.map(({ id, title, body }) => (
                    <ListItem button key={id} className={classes.entry} >
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete" color="primary" onClick={() => dispatch(clearNotification(id))} >
                        <CloseIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  ))
              }
            </List>
          </Grid>
        </Grid>

      </DialogContent>

      <MyDialogAction handleClose={handleClose} />
    </Dialog>
  );

}

export default NotificationDialog
