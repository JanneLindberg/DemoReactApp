import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { IconButton, Tooltip } from '@material-ui/core';
import CloudOutlined from '@material-ui/icons/CloudOutlined'
import CloudOffOutlined from '@material-ui/icons/CloudOffOutlined'
import CloudDownloadOutlined from '@material-ui/icons/CloudDownloadOutlined'
import CloudUploadOutlined from '@material-ui/icons/CloudUploadOutlined'

import { reloadList } from '../../store/actions';
import {
  CLOUD_OFFLINE,
  CLOUD_ONLINE,
  CLOUD_UPLOAD,
  CLOUD_DOWNLOAD,
} from '../../store/actions'

const CloudIcon = () => {

  const dispatch = useDispatch();
  const cloudState = useSelector(state => state.cloudState);

  return (
    <Tooltip title="Cloud" aria-label="Cloud">
      <IconButton data-testid="RefreshBtn" edge="end" color="secondary" onClick={() => dispatch(reloadList()) }>
        { cloudState === CLOUD_OFFLINE && <CloudOffOutlined /> }
        { cloudState === CLOUD_ONLINE && <CloudOutlined /> }
        { cloudState === CLOUD_UPLOAD && <CloudUploadOutlined /> }
        { cloudState === CLOUD_DOWNLOAD && <CloudDownloadOutlined /> }
      </IconButton>
    </Tooltip>
  )
}

export default CloudIcon;
