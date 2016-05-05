const React = require('react');
const { render } = require('react-dom');
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const App = require('./components/App');
const reducers = require('./reducers');

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
