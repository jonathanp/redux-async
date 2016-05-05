const React = require('react');
const { connect } = require('react-redux');
const { load, remove } = require('../actions');
const ListItem = require('./list-item');

const List = React.createClass({
  displayName: 'List',

  componentDidMount: function() {
    this.props.onLoad();
  },

  render: function() {
    const { items, onRemove } = this.props;

    return (
      <ul>
        {items.map(item =>
          <ListItem
            key={item.id}
            content={item.content}
            pending={item.pending}
            onClick={() => onRemove(item.id)}
          />
        )}
      </ul>
    );
  }
});

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => { dispatch(load()); },
  onRemove: (id) => { dispatch(remove(id)); }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(List);
