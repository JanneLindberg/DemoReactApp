import React from 'react';

import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const MyDialogAction = ({ dispatch, handleClose, handleCancel, handleSubmit}) => {

  return (
    <DialogActions>
      {handleClose && <Button onClick={handleClose} color="primary" variant="outlined" endIcon={<CloseOutlinedIcon color="primary" />}> Close </Button> }
      {handleCancel && <Button onClick={handleCancel} color="primary" variant="outlined" endIcon={<CancelOutlinedIcon color="primary"/>}>Cancel</Button> }
      {handleSubmit && <Button onClick={handleSubmit} color="primary" variant="outlined" endIcon={<SendOutlinedIcon color="primary"/>}>Send</Button> }
    </DialogActions>
  )
}

export default MyDialogAction
