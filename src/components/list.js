const React = require('react');

const List = () => (
  <ul>
    <li>
        Foo
        <button type="button" onClick={() => console.log('remove')}>×</button>
    </li>
    <li>
        Bar
        <button type="button" onClick={() => console.log('remove')}>×</button>
    </li>
  </ul>
);

List.displayName = 'List';
module.exports = List;
