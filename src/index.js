import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import FormContainer from './containers/form.container';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import './styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <FormContainer />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
