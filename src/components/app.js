const React = require('react');
const { connect } = require('react-redux');
const Form = require('./form');
const List = require('./list');

const App = ({ loading }) => (
  <main style={Object.assign({ height: '100%' }, loading ? { cursor: 'wait' } : null)}>
    <Form />
    <List />
  </main>
);

App.displayName = 'App';

const mapStateToProps = (state) => ({
  loading: state.loading
});

module.exports = connect(mapStateToProps)(App);
