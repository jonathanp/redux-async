const { ADD, REMOVE } = require('./actions');

function items(state = [], action) {
  switch (action.type) {
    case ADD:
      const lastIndex = state[state.length - 1] ? state[state.length - 1].id : 0;

      return state.concat({
        id: lastIndex + 1,
        content: action.content
      });

    case REMOVE:
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
}

module.exports = items;
