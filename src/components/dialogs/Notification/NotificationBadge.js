import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';

import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import AnnouncementIcon from '@material-ui/icons/AnnouncementOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import NotificationImportantOutlinedIcon from '@material-ui/icons/NotificationImportantOutlined';



import NotificationDialog from './NotificationDialog';


const StyledBadge1 = withStyles(theme => ({
  badge: {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);



/*
const NotificationDialog = (props) => {
  const { postMessage, postCmd } = props;
  const [showNotificationDialog, setNotificationDialog] = useState(false);

  const closeNotificationDialog = () => {
    setNotificationDialog(false);
  }

  return (
    <React.Fragment>
      <Tooltip title="Notifications" aria-label="Settings">
        <IconButton edge="end" color="secondary" onClick={() => setNotificationDialog(true)}>
          <Settings  />
        </IconButton>
      </Tooltip>

      <NotificationDialog showModal={showNotificationDialog} closeModal={closeNotificationDialog} />
    </React.Fragment>
  )
}
*/



const NotificationBadge = ({ numMessages }) => {
  const [showNotificationDialog, setNotificationDialog] = useState(false);

  const closeNotificationDialog = () => {
    setNotificationDialog(false);
  }
  
  const notifications = useSelector(state => state.notifications);
  
  return (
    <Box display="flex">
      <Box m={1}>

        {/*
        <IconButton aria-label="num-messages" onClick={() => dispatch({ type: 'INC_MESSAGE_COUNT', payload: {x1:'11', x2: '22'} })} >
         */}
        <Tooltip title="Notifictions" aria-label="notifications">

        <IconButton aria-label="num-messages" onClick={() => notifications.num > 0 ? setNotificationDialog(true) : null} >
          <StyledBadge1 badgeContent={notifications ? notifications.num : null } color="secondary">
            {notifications.num > 0 ? <NotificationImportantOutlinedIcon color="secondary"/> : <NotificationsNoneOutlinedIcon  /> }
          </StyledBadge1>
        </IconButton>
      </Tooltip>

      </Box>
      <NotificationDialog showModal={showNotificationDialog} closeModal={closeNotificationDialog} />
    </Box>
  )
}

export default NotificationBadge;
