const React = require('react');

const ListItem = ({ content, onClick, pending }) => (
  <li style={pending ? {opacity: 0.4} : null}>
    {content}
    {!pending && <button type="button" onClick={onClick}>×</button>}
  </li>
);

ListItem.displayName = 'ListItem';

module.exports = ListItem;
