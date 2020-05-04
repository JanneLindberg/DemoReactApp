import React from 'react';

const AppContext = React.createContext()

export class AppProvider extends React.Component {
  state = {
    number : 10,
    name: 'App title'
  }

  render() {
    return <AppContext.Provider value={this.state}>
             {this.props.children}
           </AppContext.Provider>
  }
}

export const AppConsumer = AppContext.Consumer;
