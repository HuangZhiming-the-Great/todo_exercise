import React from 'react';
import './App.css';

/*
as for that we are going to use redux in this app, so we need a united component to store the state.
so we will not use ToDoApp directorly but use the container that can connect the store of state and component.

import ToDoApp from './components/ToDoApp';
*/
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import ToDoAppContainer from './containers/ToDoAppContainer';

//configureStore is the function we created that takes our combined reducers and our redux middleware and mashes them all together. the line below intialize it
const store=configureStore();

function App() {
  return (
    <Provider store={store}>
      <ToDoAppContainer />
    </Provider>
  );
}

export default App;
