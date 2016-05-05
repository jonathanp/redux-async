const React = require('react');

const ListItem = ({ content, onClick }) => (
  <li>
    {content}
    <button type="button" onClick={onClick}>×</button>
  </li>
);

ListItem.displayName = 'ListItem';

module.exports = ListItem;
