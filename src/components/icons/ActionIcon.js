import React, {useState} from 'react';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


const IconAction = ({icon, tooltipText, Action}) => {
  const [showDialog, setDialog] = useState(false);

  const closeDialog = () => {
    setDialog(false);
  }

  return (
    <React.Fragment>
      <Tooltip title={tooltipText} aria-label="Settings">
        <IconButton edge="end" color="secondary" onClick={() => setDialog(true)}>
          {icon}
        </IconButton>
      </Tooltip>
      <Action showModal={showDialog} closeModal={closeDialog} />
    </React.Fragment>
  )
}

export default IconAction;
