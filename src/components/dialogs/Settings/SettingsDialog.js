import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';

import Icon from '@material-ui/core/Icon';

import MyDialogAction from '../MyDialogAction'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    minWidth: 400,
  }

}));


const SelectIcon = (props) => {
  const {active, entry} = props
  return (
    <Icon >{ active ? entry.icon_on : entry.icon_off }</Icon>
  )}

const SettingsItem = ({entry}) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <ListItemIcon>
        <SelectIcon active={entry.value} entry={entry} />
      </ListItemIcon>
      <ListItemText primary={entry.label} />
      <ListItemSecondaryAction>
        <Switch onChange={() => dispatch({ type: 'TOGGLE_SETTING', id: entry.id })} checked={entry.value} />
      </ListItemSecondaryAction>
    </ListItem>
  )}


const SettingsDialog = ({showModal, closeModal}) => {
  const classes = useStyles();
  const settings = useSelector(state => state.settings);

  const handleClose = () => {
    closeModal()
  };

  return (
    <div>
      <Dialog
        open={showModal}
        onClose={closeModal}
        aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Settings</DialogTitle>

        <DialogContent
          className={classes.content}
        >
          
          <List>
            {
              settings.map(entry => (
                <SettingsItem key={entry.id} entry={entry}  />
              ))
            }
          </List>

        </DialogContent>

        <MyDialogAction handleClose={handleClose} />
      </Dialog>
    </div>
  );
}

export default SettingsDialog;
