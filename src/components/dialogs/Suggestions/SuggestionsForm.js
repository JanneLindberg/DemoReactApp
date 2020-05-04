import React, {useState } from 'react';
import { useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

import { postComment } from '../../../store/actions'

const EmailField = ({email, emailChange}) => {

  return (
    <TextField
      value={email}
      required={true}
      margin="dense"
      id="email"
      label="Email"
      type="email"
      onChange={emailChange}
      variant="outlined"
      fullWidth
      InputProps={{
        startAdornment: (
        <InputAdornment position="start">
          <EmailOutlinedIcon />
        </InputAdornment>
        )
      }}
    />
  )
}


const useStyles = makeStyles(theme => ({
  card: {
    margin: 0,
    width: '100%',
    backgroundColor: '#fefeff',
  },
  header: {
    backgroundColor: theme.palette.primary.title,
    borderBottom: '1px solid blue;',
    textAlign: 'center',
    color: theme.palette.secondary.main,
  },
  action: {
    backgroundColor: theme.palette.primary.title,
  },
  content: {
    backgroundColor: '#ffffff',
  }
}));


const SuggestionsForm = ({closeModal}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [comment, setComment] = useState('')

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleTextChange = event => {
    setComment(event.target.value );
  };

  const clearForm = () => {
    setComment('');
    setEmail('');
  }

  const handleCancel = () => {
    clearForm()
    closeModal();
  };

  const handleSubmit = () => {
    dispatch( postComment(comment, email))
    clearForm()
    closeModal();
  }

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header} title="Give an opinion" />

      <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            Give some suggestion how we can improve this...
          </Typography>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>

                <TextField
                  autoFocus
                  multiline={true}
                  required={true}
                  rows="5"
                  rowsMax="6"
                  margin="dense"
                  id="message"
                  label="Comment"
                  fullWidth
                  variant="outlined"
                  onChange={handleTextChange}
                  value={comment}
                />

              </Grid>
              <Grid item xs={12} sm={12}>
                <EmailField email={email} emailChange={handleEmailChange}/>
              </Grid>
            </Grid>

        </CardContent>

      <CardActions className={classes.action}>
        {handleCancel && <Button
                           onClick={handleCancel} color="primary" variant="outlined" endIcon={<CancelOutlinedIcon color="primary"/>}>Cancel</Button> }
        {handleSubmit && <Button
                           disabled={ sending || !(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(email)) }
                           onClick={handleSubmit} color="primary" variant="outlined" endIcon={<SendOutlinedIcon color="primary"/>}>Send</Button>
        }
      </CardActions>
    </Card>
  );
}

export default SuggestionsForm;
