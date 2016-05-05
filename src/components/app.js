const React = require('react');
const Form = require('./form');
const List = require('./list');

const App = () => (
  <main>
    <Form/>
    <List/>
  </main>
);

App.displayName = 'App';
module.exports = App;
