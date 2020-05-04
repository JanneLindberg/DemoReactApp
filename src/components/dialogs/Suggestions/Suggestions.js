import React, {useState} from 'react';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';

import SuggestionsDialog from './SuggestionsDialog';

const Suggestions = (props) => {
  const [showSuggestionsDialog, setSuggestionsDialog] = useState(false);

  const closeSuggestionsDialog = () => {
    setSuggestionsDialog(false);
  }

  return (
    <React.Fragment>
      <Tooltip title="Suggestions" aria-label="Suggestions">
        <IconButton edge="end" color="secondary" onClick={() => setSuggestionsDialog(true)}>
          <CommentOutlinedIcon />
        </IconButton>
      </Tooltip>
      <SuggestionsDialog showModal={showSuggestionsDialog} closeModal={closeSuggestionsDialog} />
    </React.Fragment>
  )
}

export default Suggestions;
