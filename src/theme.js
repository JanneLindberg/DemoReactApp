import { createMuiTheme } from '@material-ui/core/styles';

import teal from '@material-ui/core/colors/teal';
import blueGrey from '@material-ui/core/colors/blueGrey';
import lime from '@material-ui/core/colors/lime';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6b7D8B',   // bar/headings/borders
      paper: '#5522ee',
      title: blueGrey['200'],
      zappa: 'green',
    },
    secondary: {
      main: '#C0FA33',      // Buttons and icons
      paper: blueGrey[700],
    },
    text: {
      primay:  teal['700'],
    },
    background: {
      default: blueGrey[50]
    },
  },

  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

  status: {
    danger: 'yellow',
  },

  overrides: {

    MuiDialog: {
      root: {
        container: '#8811ff',
      },
      paper: '#88eeff',

    },
    MuiDialogTitle: {
      root: {
        backgroundColor: blueGrey[100],
        color: teal[900],
        textAlign: 'center',
        fontWeight: "bold",
      },
    },
    MuiDialogActions: {
      root: {
        backgroundColor: blueGrey[100],
      }
    },
    MuiToolbar: {
      root: {
      }
    },
    MuiFormControl: {
      root: {
        minWidth: '100%',
      }
    },
    MuiMenu: {
      root: {
        backgroundColor: blueGrey[200],
      }
    },
    MuiMenuItem:{
      root: {
        backgroundColor: blueGrey[200],
      }
    },
    MuiCardHeader: {
      root: {
      }
    },
    MuiTooltip: {
      tooltip: {
        fontSize: "1.2em",
        color: '#C0FA33',
        backgroundColor: blueGrey[600],
      },
    },
    MuiChip: {
      root: {
        fontSize: "1.2em",
        color: lime[700],
        backgroundColor: blueGrey[600],
      },
    },
    MuiExpansionPanel: {
      root: {
        textAlign: 'left',
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        fontSize: "1.2em",
        Width: '100%',
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        borderTopStyle: 'dashed',
        borderTopColor: blueGrey[100],
        borderWidth: '1px',
        minHeight: '60px',
        marginTop: '5px',
        marginBottom: '5px',
      }
    },
    MuiButton: {
      root: {
        fontWeight: "bold",
      },
      text: {
        color: teal[800],
      },
    },
    MuiButtonOutlinedPrimary: {
      text: {
        color: 'red',
      }
    },    
  }
});
