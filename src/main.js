const React = require('react');
const { render } = require('react-dom');
const { createStore, applyMiddleware, compose } = require('redux');
const { Provider } = require('react-redux');
const thunk = require('redux-thunk').default;
const App = require('./components/App');
const reducers = require('./reducers');

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
