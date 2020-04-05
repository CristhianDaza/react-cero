import '../styles/styles.scss'
import AppRouts from './AppRouts'
import React from 'react';
import {Provider} from 'react-redux'
import store from '../redux/store'

const App = () => (
  <Provider store={store}>
    <AppRouts />
  </Provider>
);

export default App;