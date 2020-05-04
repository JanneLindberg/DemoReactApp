import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import SuggestionsForm from './SuggestionsForm'

const SuggestionsDialog = ({showModal, closeModal}) => {  
  return (
    <div>
      <Dialog
        open={showModal}
        onClose={closeModal}
        aria-labelledby="form-dialog-title" >
        <SuggestionsForm closeModal={closeModal}/>
      </Dialog>
    </div>
  );
}

export default SuggestionsDialog;
