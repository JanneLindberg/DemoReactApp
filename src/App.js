import React from 'react';

import './App.css';

import { ThemeProvider } from '@material-ui/styles';
import { AppProvider } from './AppContext.js';
import { theme } from './theme.js';
import MainPanel from './views/MainPanel';


function App(props) {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <AppProvider>
            <MainPanel {...props}/>
          </AppProvider>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
