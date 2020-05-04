import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import MyDialogAction from './MyDialogAction'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));


const MessageDialog = (props) => {
  const classes = useStyles();
  
  const handleTextChange = event => {
    console.log('' + event.target.name + '=' + event.target.value)
  };

  const handleClose = () => {
    props.closeModal();
  };

  const handleSubmit = () => {
    props.closeModal();    
  }
  
  const { showmodal, closeModal } = props;

  return (
    <div>
      <Dialog
        open={showmodal}
        onClose={closeModal}
        fullWidth={true}
        maxWidth = {'sm'}

        aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">A Message</DialogTitle>

        <DialogContent
          className={classes.root}
          color='textPrimary'>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>

              <DialogContentText>
               
              </DialogContentText>

              <TextField
                autoFocus
                multiline={true}
                required={true}
                rows="4"
                rowsMax="6"
                margin="dense"
                id="message"
                label="message"
                fullWidth
                onChange={handleTextChange}
              />

            </Grid>
            <Grid item xs={12} sm={12}>
            </Grid>
          </Grid>
        </DialogContent>
        <MyDialogAction handleClose={handleClose} handleSubmit={handleSubmit}/>
      </Dialog>
    </div>
  );
}

export default MessageDialog;


