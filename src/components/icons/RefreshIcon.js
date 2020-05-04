import React from 'react';
import { useDispatch } from 'react-redux'

import { IconButton, Tooltip } from '@material-ui/core';

import Refresh from '@material-ui/icons/Refresh'


import { reloadList } from '../../store/actions'

const RefreshIcon = () => {
  const dispatch = useDispatch();

  return (
    <Tooltip title="Refresh" aria-label="Refresh">
      <IconButton data-testid="RefreshBtn" edge="end" color="secondary" onClick={() => dispatch(reloadList()) }>
        <Refresh />
      </IconButton>
    </Tooltip>
  )
}

export default RefreshIcon

