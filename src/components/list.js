const React = require('react');
const { connect } = require('react-redux');
const { remove } = require('../actions');
const ListItem = require('./list-item');

const List = ({ items, onRemove }) => (
  <ul>
    {items.length > 0
      ? items.map(item =>
        <ListItem
          key={item.id}
          content={item.content}
          onClick={() => onRemove(item.id)}
        />
      )
      : <em>No items</em>
    }
  </ul>
);

List.displayName = 'List';

const mapStateToProps = (state) => ({
  items: state
});

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => { dispatch(remove(id)); }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(List);
